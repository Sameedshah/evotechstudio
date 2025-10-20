# EmailJS Contact Form Setup

## Overview
The contact form is integrated with EmailJS to handle form submissions and send automated emails.

## Configuration

### Environment Variables
Add these to your `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_qj4vd4b
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SALES=template_1muzr44
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_THANKS=template_vp6wm88
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=SAN57ADEFk8KfmLWD
```

## Email Flow

### 1. Sales Notification Email
- **Recipient**: info@evotechstudio.dev
- **Template ID**: template_1muzr44
- **Purpose**: Notifies the team about new contact form submissions

### 2. Auto-Reply Email
- **Recipient**: Visitor's email address
- **Template ID**: template_vp6wm88
- **Purpose**: Sends confirmation to the visitor
- **Trigger**: Automatically triggered by the sales template (configured in EmailJS dashboard)

## Template Variables

The following variables are sent to EmailJS templates:

- `name` - Visitor's name
- `email` - Visitor's email address
- `phone` - Visitor's phone number (optional)
- `message` - Visitor's message
- `title` - Email subject/title
- `time` - Timestamp of submission (Pakistan timezone)

## Implementation Details

### Form Validation
- Name (required)
- Email (required, validated format)
- Message (required)
- Phone (optional)

### User Experience
- Loading state during submission
- Success/error toast notifications
- Form reset after successful submission
- Disabled submit button during processing

### Error Handling
- Network errors
- EmailJS service errors
- Form validation errors
- Fallback contact information provided

## Testing

To test the contact form:
1. Fill out all required fields
2. Submit the form
3. Check for success toast notification
4. Verify emails are received at info@evotechstudio.dev
5. Verify auto-reply is sent to the submitted email address

## Troubleshooting

### Common Issues
1. **Environment variables not loaded**: Restart the development server
2. **EmailJS service errors**: Check service ID and template IDs in EmailJS dashboard
3. **Public key issues**: Verify the public key in EmailJS account settings
4. **Template not found**: Ensure template IDs match those in EmailJS dashboard

### Debug Mode
Check browser console for EmailJS response logs and error details.