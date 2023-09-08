import { ArrowLeft } from "@mui/icons-material";
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

export default function Privacy() {
  const router = useRouter();
  const handleBack = () => router.back();
  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 20 }}>
      <Button onClick={handleBack} startIcon={<ArrowLeft />}>
        Back
      </Button>
      <Typography variant="h3" gutterBottom>
        <strong>Privacy Policy for Book Scout</strong>
      </Typography>

      <Typography variant="body1" paragraph>
        Effective Date: September 8, 2023
      </Typography>

      <Typography variant="body1" paragraph>
        Welcome to Book Scout, a mobile application developed by Cool Slingshot.
        At Book Scout, we value your privacy and are committed to protecting
        your personal information. This Privacy Policy is designed to help you
        understand how we collect, use, disclose, and safeguard your data when
        you use our mobile application, "Book Scout," available for download on
        the Apple App Store and Google Play Store (hereinafter referred to as
        "the App"). By using the App, you consent to the practices described in
        this Privacy Policy.
      </Typography>

      <Typography variant="h4" paragraph>
        <strong>Information We Collect</strong>
      </Typography>

      <Typography variant="body1" paragraph>
        <Typography variant="body1">
          <strong>Automatically Collected Information:</strong> When you use the
          App, we may automatically collect certain information, including:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Device information (e.g., device type, operating system)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Usage data (e.g., app features accessed, interaction frequency)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Location information (if you enable location services)" />
          </ListItem>
        </List>
      </Typography>
      <Typography variant="h4" paragraph>
        <strong>How We Use Your Information</strong>
      </Typography>
      <Typography variant="body1">
        We may use the information we collect for various purposes, including
        but not limited to:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Providing and Improving the App"
            secondary="To operate and maintain the App, personalize your experience, and enhance its features and functionality."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Communication"
            secondary="To send you important updates, notifications, and respond to your inquiries."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="User Engagement"
            secondary="To recommend books, authors, and content that may be of interest to you based on your usage patterns and preferences."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Analytics"
            secondary="To analyze and improve our services, monitor app performance, and understand user behavior."
          />
        </ListItem>
      </List>

      <Typography variant="h4" paragraph>
        <strong>Disclosure of Your Information</strong>
      </Typography>

      <Typography variant="body1">
        We do not sell or rent your personal information to third parties.
        However, we may share your information with:
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="Service Providers"
            secondary="We may engage third-party service providers to assist with app development, maintenance, and other operational tasks. These providers will have access to your information for these purposes only."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Legal Compliance"
            secondary="We may disclose your information in response to legal requirements, court orders, government requests, or to protect our rights, privacy, safety, or property."
          />
        </ListItem>
      </List>

      <Typography variant="h4" paragraph>
        <strong>Data Security</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        We employ industry-standard security measures to protect your data.
        While we take reasonable precautions, no method of data transmission or
        storage is 100% secure, and we cannot guarantee absolute security.
      </Typography>

      <Typography variant="body1">
        <strong>Your Choices</strong>
      </Typography>
      <Typography variant="body1">
        You have the following rights regarding your personal information:
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="Access and Correction"
            secondary="You can access and update your personal information through the App's settings."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Data Deletion"
            secondary="You can request the deletion of your account and associated data by contacting us."
          />
        </ListItem>
      </List>

      <Typography variant="h4" paragraph>
        <strong>Children's Privacy</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        Book Scout is not intended for use by individuals under the age of 13.
        If you are a parent or guardian and believe that your child has provided
        us with personal information, please contact us, and we will take
        appropriate steps to remove such information.
      </Typography>

      <Typography variant="h4" paragraph>
        <strong>Changes to this Privacy Policy</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        We may update this Privacy Policy from time to time. The most current
        version will be posted on this page, and the effective date will be
        revised accordingly. We encourage you to review this Privacy Policy
        periodically for any changes.
      </Typography>

      <Typography variant="h4" paragraph>
        <strong>Contact Us</strong>
      </Typography>
      <Typography variant="body1">
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or the App, please contact us at [Insert Contact Information].
      </Typography>

      <Typography variant="body1" paragraph sx={{ pt: 2 }}>
        Thank you for using Book Scout. Your privacy and trust are important to
        us.
      </Typography>

      <Typography variant="body1" paragraph>
        *Last Updated: September 8, 2023*
      </Typography>
    </Container>
  );
}
