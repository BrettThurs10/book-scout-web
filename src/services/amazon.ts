import axios from "axios";
import dayjs from "dayjs";
import { camelize } from "../utils/camelize";
import { isValidDate } from "../utils/isValidDate";

export type getProductReviewsURLProps = {
  asin: string;
  page?: number;
  onlyPositive?: boolean;
  onlyCritical?: boolean;
  ratingNumber?: number;
};
export const getProductReviewsURL = ({
  asin,
  page = 1,
  onlyCritical,
  onlyPositive,
  ratingNumber,
}: getProductReviewsURLProps) => {
  let convertedRatingValue = "";
  if (ratingNumber) {
    switch (ratingNumber) {
      case 4:
        convertedRatingValue = "four_star";
        break;
      case 3:
        convertedRatingValue = "three_star";
        break;
      case 5:
        convertedRatingValue = "two_star";
        break;
      case 1:
        convertedRatingValue = "one_star";
        break;
      default:
        convertedRatingValue = "five_star";
        break;
    }
  }
  if (onlyCritical) {
    return `https://www.amazon.com/product-reviews/${asin}/ref=cm_cr_arp_d_viewpnt_rgt?pageNumber=${page}&reviewerType=all_reviews&filterByStar=critical`;
  }
  if (onlyPositive) {
    return `https://www.amazon.com/product-reviews/${asin}/ref=cm_cr_arp_d_viewpnt_rgt?pageNumber=${page}&reviewerType=all_reviews&filterByStar=positive`;
  }
  if (ratingNumber) {
    return `https://www.amazon.com/product-reviews/B00A2PJ90K/ref=cm_cr_unknown?pageNumber=1&reviewerType=all_reviews&filterByStar=${convertedRatingValue}`;
  }
  return `https://www.amazon.com/product-reviews/${asin}/ref=cm_cr_getr_d_show_all?pageNumber=${page}&reviewerType=all_reviews`;
};

export type fetchAmazonReviewProps = getProductReviewsURLProps & {
  asin: string;
  page?: number;
};

export const initialFetchAmazonReviewResponse = [
  {
    avatar: "",
    body: "",
    helpfulReviewCount: "",
    reviewDate: "",
    reviewDateActual: "",
    reviewRating: "",
    reviewRatingActual: "",
    title: "",
    username: "",
  },
];

export type fetchAmazonReviewResponseObj = {
  avatar: string;
  body: string;
  helpfulReviewCount: string;
  reviewDate: string;
  reviewDateActual: string;
  reviewRating: string;
  reviewRatingActual: string;
  title: string;
  username: string;
};

export type fetchAmazonReviewResponse = {
  reviews: fetchAmazonReviewResponseObj[];
};

export const fetchAmazonReview = async (
  props: fetchAmazonReviewProps
): Promise<fetchAmazonReviewResponse> => {
  const { page = 1 } = props;
  console.log("FETCHING AMAZON REVIEW");
  const cheerio = require("cheerio");
  const reviews = [];
  try {
    const response = await axios.get(getProductReviewsURL(props));

    console.log(getProductReviewsURL(props));

    const html = response.data;

    const $ = cheerio.load(html);
    const review = $(".review");
    const userName = $(".a-profile-name");
    const userImage = $(".a-profile-avatar");
    const reviewTitle = $(".review-title");
    const reviewBody = $(".review-text");
    const reviewDate = $(".review-date");
    const reviewRating = $(".a-icon-alt");
    const helpfulReviewCount = $(".cr-vote-text");
    const genre = $("#detailBulletsWrapper_feature_div > .a-text-bold");

    review.each((_idx, el) => {
      reviews.push({
        username: $(el).find(userName).text(),
        avatar: $(el).find(userImage).children("img").attr("data-src"),
        title: $(el).find(reviewTitle).children("span").text(),
        body: $(el).find(reviewBody).children("span").text(),
        reviewRating: $(el).find(reviewRating).text(),
        reviewRatingActual: $(el).find(reviewRating).text()?.split(" ")[0],
        reviewDate: $(el).find(reviewDate).text(),
        reviewDateActual: dayjs($(el).find(reviewDate).text()).format(
          "MMMM DD, YYYY"
        ),
        helpfulReviewCount: $(el)
          .find(helpfulReviewCount)
          .text()
          ?.split(" ")[0],
      });
    });
  } catch (error) {
    throw error;
  }
  return { reviews };
};

export const getProductURL = (asin: string) =>
  `https://www.amazon.com/dp/${asin}/`;

export const getProductURLByISBN = (isbn: string) =>
  `https://www.amazon.com/isbn-search/s?k=${isbn}`;

export const convertISBNtoASIN = async (isbn: string) => {
  const cheerio = require("cheerio");
  try {
    console.log(getProductURLByISBN(isbn));
    const response = await axios.get(getProductURLByISBN(isbn));
    const html = response.data;
    const $ = cheerio.load(html);
    const keywordParam = `keywords=${isbn}`;

    let linkElement = $(`a:contains("Kindle")[href*="${keywordParam}"]`);

    if (linkElement.length === 0) {
      linkElement = $(`a:contains("Paperback")[href*="${keywordParam}"]`);
    }
    if (linkElement.length === 0) {
      linkElement = $(`a:contains("Hardback")[href*="${keywordParam}"]`);
    }

    if (linkElement.length === 0) {
      console.log("Not a good book");
      return false;
    }

    const href = linkElement.attr("href");
    return asinFinder(href);
  } catch (error) {
    throw error;
  }
};

export const getAmazonReviewByISBN = async (isbn: string, page?: number) => {
  const asin = await convertISBNtoASIN(isbn);
  const response = await fetchAmazonReview({ asin, page });
  return response;
};

export const initialGetAmazonBookDetailsProps = {
  asin: "",
  title: "",
  authors: [],
  details: undefined, // Replace with the appropriate type
  authorContent: "",
  series: [],
  popularHighlights: [],
  genre: "",
  badge: { text: "", url: "" },
  relatedBooks: [],
  price: "",
};

export type getAmazonBookDetailsProps = {
  asin: string;
  title: string;
  // bookImageURL: string;
  // authors: string[];
  details;
  // authorContent: string;
  price: string;
  description: string[];
  series: {
    bookImage: string;
    title: string;
    author: string;
    url: string;
    avgRating: string;
    ratingsCount: string;
  }[];
  popularHighlights: string[];
  genre: string;
  badge: {
    text: string;
    url: string;
  };
  relatedBooks: {
    title: string;
    img: string;
    href: string;
    asin: string;
    summary: string;
    avgRating: string;
    label: string;
    ratingsCount: string;
  }[];
};

export const searchAmazon = async (
  query: string,
  page: number = 1
): Promise<{ books: any[]; pagination: any[] }> => {
  const url = `https://www.amazon.com/s?k=${query.replace(
    " ",
    "+"
  )}&i=stripbooks&page=${page}`;
  console.log(url);
  try {
    const cheerio = require("cheerio");
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const books = [];
    // Extract paginated numbers
    const pagination = [];
    $(".s-pagination-item").each((index, element) => {
      const pageText = $(element).text().trim();
      const pageURL = $(element).attr("href");
      pagination.push([pageText, pageURL]);
    });
    $("div[data-asin]").each((index, element) => {
      if ($(element).attr("data-asin") === "") return;
      const bookContainer = $(element).find(".sg-col-inner");
      const title = $(bookContainer).find("h2 a span").text().trim();
      if (title === "") return;
      const asin = $(element).attr("data-asin");
      const author = $(bookContainer)
        .find(
          ".a-row.a-size-base.a-color-secondary .a-row span.a-size-base, .a-row.a-size-base.a-color-secondary .a-row a"
        )
        .text()
        ?.split(" | ")
        .filter((section) => section.includes("by"))[0];
      const publishDate = $(bookContainer)
        .find(
          ".a-row.a-size-base.a-color-secondary .a-row span.a-size-base, .a-row.a-size-base.a-color-secondary .a-row a"
        )
        .text()
        ?.split(" | ");
      const image = $(element).find("img.s-image").attr("src");
      const avgRating = $(element)
        .find("span.a-icon-alt")
        .first()
        .text()
        .trim();
      const reviewCount = $(element)
        .find("span.a-size-base.s-underline-text")
        .text()
        .trim();

      let bookURLs = [];

      // Loop through each book result and extract the book URLs
      bookContainer.each((index, element) => {
        const formatElement = $(element).find(
          "a.a-size-base.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-bold:not(:contains(Audible))"
        );

        if (formatElement === undefined) return;
        const formatText = formatElement.text().toLowerCase();
        if (formatText === "") return;
        // Check if the format is not an Amazon Audible URL
        if (formatText.includes("audiobook")) return;
        const bookURL = formatElement.attr("href");
        if (bookURL !== undefined) {
          bookURLs.push(bookURL);
        }
      });

      const foobar = `https://www.amazon.com${bookURLs[0]}`;

      const payload = {
        asin: asinFinder(foobar),
        title,
        author,
        image,
        reviewCount,
        avgRating,
        publishDate: isValidDate(publishDate[publishDate.length - 1])
          ? publishDate[publishDate.length - 1]
          : "",
        bookURL: foobar,
      };
      books.push(payload);
    });

    return { books, pagination };
  } catch (error) {
    console.error("Error fetching Amazon data:", error);
    return [];
  }
};

export const getAmazonBookDetails = async (
  asin: string,
  filters?: string[]
): Promise<getAmazonBookDetailsProps | { [key: string]: string }[]> => {
  const cheerio = require("cheerio");

  const url = `https://www.amazon.com/dp/${asin}/`;
  console.log({ url });
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    let filteredObj: { [key: string]: any }[] = [];

    if (filters) {
      filters.forEach((filter) => {
        if (filter === "genre") {
          const genre = $("#wayfinding-breadcrumbs_feature_div")
            .find("li span")
            .last()
            .text()
            .trim();
          filteredObj.push(genre);
        }
        if (filter === "details") {
          let details = {};
          $("#detailBullets_feature_div ul li .a-list-item").each(
            (index, element) => {
              const key = camelize($($(element).find("span")[0]).text().trim())
                .replace(/[^\x00-\x7F]/g, "")
                .replace(/\n/g, "")
                .replace(":", "")
                .replace(/\s+/g, "");
              if (key === "") {
                return;
              }
              const value = $($(element).find("span")[1]).text().trim();
              details[key] = value;
            }
          );
          details = {
            ...details,
            ...{
              ratingsCount: $("#acrCustomerReviewText")?.text()?.split(" ")[0],
              customerReviews: $("#acrPopover")
                ?.children("span")
                ?.text()
                ?.trim()
                ?.split(" ")[0],
            },
          };
        }
      });
      return filteredObj;
    }

    // Extract book title
    const title = $("#productTitle").text().trim();
    const description = [];
    $("#bookDescription_feature_div")
      .find("p")
      .each((index, element) => {
        const part = $(element).text().trim();
        if (part === "" || part === "Read more") return;
        description.push(part);
      });
    console.log({ description });
    // Extract author names
    const authors = [];
    $("#bylineInfo .author a").each((index, element) => {
      const authorName = $(element).text().trim();
      authors.push(authorName);
    });

    // Extract product details
    let details = {};
    $("#detailBullets_feature_div ul li .a-list-item").each(
      (index, element) => {
        const key = camelize($($(element).find("span")[0]).text().trim())
          .replace(/[^\x00-\x7F]/g, "")
          .replace(/\n/g, "")
          .replace(":", "")
          .replace(/\s+/g, "");
        if (key === "") {
          return;
        }
        const value = $($(element).find("span")[1]).text().trim();
        details[key] = value;
      }
    );
    details = {
      ...details,
      ...{
        ratingsCount: $("#acrCustomerReviewText")?.text()?.split(" ")[0],
        customerReviews: $("#acrPopover")
          ?.children("span")
          ?.text()
          ?.trim()
          ?.split(" ")[0],
      },
    };

    // // Extract "About the Author" section
    // const authorContent = $(".singleAuthorSection p").text().trim();

    // Extract books in the series
    const seriesWidget = $("#SeriesWidgetButtonWrapper");
    const books = [];

    seriesWidget.find(".a-carousel-card").each((index, element) => {
      if (!element) return;
      const bookTitle = $(element).find("span.a-size-base-plus").text().trim();
      const bookAuthor = $(element).find("a.a-link-child").text().trim();
      const avgRating = $(element)
        .find(".a-icon.a-icon-star span")
        .text()
        .trim();
      const ratingsCount = $(element)
        .find("span.a-size-small.a-color-link")
        .text()
        .trim();
      const url = $(element).find("a.a-link-normal").first().attr("href");
      const bookImage = $(element).find(".product-image").attr("src");
      books.push({
        bookImage,
        title: bookTitle,
        author: bookAuthor,
        url: `https://amazon.com${url}`,
        avgRating,
        ratingsCount,
      });
    });

    // Extract related books
    const relatedBooks = [];
    const relatedBooksElem = $("#similarities_feature_div");
    relatedBooksElem.find(".a-carousel-card").each((index, element) => {
      if (!element) return;
      const img = $(element)
        .find(".a-link-normal")
        .find("a div img")
        .attr("src");
      const href = $(element).find(".a-link-normal").attr("href");
      const title = $(element)
        .find(".a-link-normal")
        .find("a span div")
        .text()
        .trim();
      const asin = asinFinder(href);
      const summary = $(element)
        .find(
          ".a-section.a-spacing-mini.a-spacing-top-mini.sp-detail-blurb .a-size-small.a-color-secondary.a-text-italic"
        )
        .text();
      const ratingContainer = $(element).find(".a-icon-row");
      const avgRating = ratingContainer
        .find(".a-link-normal")
        ?.attr("title")
        ?.split(" ")[0];
      const ratingsCount = ratingContainer
        .find(".a-link-normal span.a-size-small")
        .text()
        .trim();
      const author = $(element)
        .find(".a-size-small.a-link-child div")
        .text()
        .trim();

      relatedBooks.push({
        title,
        img,
        href,
        asin,
        summary,
        avgRating,
        author,
        ratingsCount,
      });
    });
    // Extract popular highlights
    const popularHighlights = [];
    const popularHighlightsElem = $(
      'div[data-feature-name="popularHighlightsBtf"] .a-section > span[role=article]'
    );
    popularHighlightsElem.each((index, element) => {
      if (!element) return;
      const highlightText = $(element).text().trim();
      popularHighlights.push(highlightText);
    });

    // Extract badge information
    const badgeLink = $(".badge-link");
    const badgeText = $(".ess-badge-text").text().trim();
    const badgeUrl = badgeLink.attr("href");
    const genre = $("#wayfinding-breadcrumbs_feature_div")
      .find("li span")
      .last()
      .text()
      .trim();
    let price = $("#kindle-price").text();
    $(".swatchElement").each((index, element) => {
      console.log($(element));
    });

    console.log();

    return {
      price,
      asin,
      title,
      // authors,
      description,
      details,
      // authorContent,
      series: books,
      popularHighlights,
      genre,
      badge: {
        text: badgeText,
        url: "https://amazon.com/" + badgeUrl,
      },
      relatedBooks,
    };
  } catch (error) {
    console.log("Error", error);
  }
};

export function asinFinder(url: string): string {
  const asinRegexDefault = /\/dp\/([A-Z0-9]{10})\//;
  const asinRegexWPercent = /%2fdp%2f([A-Z0-9]{10})%2f/i;
  const matches = url.match(asinRegexDefault) || url.match(asinRegexWPercent);

  if (matches && matches.length > 1) {
    return matches[1];
  } else {
    return "";
  }
}

export const findASINbyISBN = async (isbn) => {};

export type batchCollectAmazonReviewsProps = getProductReviewsURLProps & {
  asin: string;
  pageCount?: number;
  pageStart?: number;
};

export const batchCollectAmazonReviews = async (
  props: batchCollectAmazonReviewsProps
): Promise<fetchAmazonReviewResponse> => {
  const { pageCount = 1 } = props;
  const cheerio = require("cheerio");
  const reviews = [];
  for (let index = 1; index < pageCount + 1; index++) {
    console.log(getProductReviewsURL({ ...props, ...{ page: index } }));
    try {
      const response = await axios.get(
        getProductReviewsURL({ ...props, ...{ page: index } })
      );

      const html = response.data;

      const $ = cheerio.load(html);

      const review = $(".review");
      const userName = $(".a-profile-name");
      const userImage = $(".a-profile-avatar");
      const reviewTitle = $(".review-title");
      const reviewBody = $(".review-text");
      const reviewDate = $(".review-date");
      const reviewRating = $(".a-icon-alt");
      const helpfulReviewCount = $(".cr-vote-text");

      review.each((_idx, el) => {
        reviews.push({
          username: $(el).find(userName).text(),
          avatar: $(el).find(userImage).children("img").attr("data-src"),
          title: $(el).find(reviewTitle).children("span").text(),
          body: $(el).find(reviewBody).children("span").text(),
          reviewRating: $(el).find(reviewRating).text(),
          reviewRatingActual: $(el).find(reviewRating).text()?.split(" ")[0],
          reviewDate: $(el).find(reviewDate).text(),
          reviewDateActual: dayjs($(el).find(reviewDate).text()).format(
            "MMMM DD, YYYY"
          ),
          helpfulReviewCount: $(el)
            .find(helpfulReviewCount)
            .text()
            ?.split(" ")[0],
        });
      });
    } catch (error) {
      throw error;
    }
  }
  console.log(reviews);
  return { reviews };
};

export type getAmazonBestSellersResponse = {
  title: string;
  author: string;
  bestSellerPosition: string;
  bookImage: string;
  asin: string;
  avgRating: string;
  ratingsCount: string;
};

export type getBookProps = {
  isbn?: string;
  asin?: string;
};

export async function getBook({ isbn }: getBookProps) {
  let asin = await convertISBNtoASIN(isbn);

  try {
    const [data1, data2] = await Promise.all([
      getAmazonBookDetails(asin),
      fetchAmazonReview({ asin }),
    ]);
    const payload = {
      ...data1,
      ...data2,
    };
    console.log(payload);
    return payload;
  } catch (error) {
    console.error("Error:", error);
  }
}
