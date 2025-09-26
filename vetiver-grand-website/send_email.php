<?php
// ===== VETIVER GRAND CONTACT FORM HANDLER =====

// Set content type to JSON
header('Content-Type: application/json');

// Enable CORS if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Configuration
$config = [
    'recipient_email' => 'contact@vetivergrand.com', // Change this to your actual email
    'subject_prefix' => 'Vetiver Grand Contact Form - ',
    'from_email' => 'noreply@vetivergrand.com',
    'from_name' => 'Vetiver Grand Website'
];

// Function to sanitize input
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function to validate email
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Function to validate phone number
function validatePhone($phone) {
    // Remove all non-digit characters except + at the beginning
    $cleaned = preg_replace('/[^\d+]/', '', $phone);
    // Check if it's a valid phone number (7-15 digits)
    return preg_match('/^\+?[1-9]\d{6,14}$/', $cleaned);
}

// Function to send email
function sendEmail($to, $subject, $message, $from_email, $from_name) {
    $headers = [
        'From: ' . $from_name . ' <' . $from_email . '>',
        'Reply-To: ' . $from_email,
        'X-Mailer: PHP/' . phpversion(),
        'Content-Type: text/html; charset=UTF-8'
    ];
    
    return mail($to, $subject, $message, implode("\r\n", $headers));
}

// Initialize response
$response = ['success' => false, 'message' => ''];

try {
    // Get and sanitize form data
    $name = isset($_POST['name']) ? sanitizeInput($_POST['name']) : '';
    $email = isset($_POST['email']) ? sanitizeInput($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? sanitizeInput($_POST['phone']) : '';
    $message = isset($_POST['message']) ? sanitizeInput($_POST['message']) : '';
    
    // Validation
    $errors = [];
    
    if (empty($name)) {
        $errors[] = 'Name is required';
    } elseif (strlen($name) < 2) {
        $errors[] = 'Name must be at least 2 characters long';
    }
    
    if (empty($email)) {
        $errors[] = 'Email is required';
    } elseif (!validateEmail($email)) {
        $errors[] = 'Please enter a valid email address';
    }
    
    if (!empty($phone) && !validatePhone($phone)) {
        $errors[] = 'Please enter a valid phone number';
    }
    
    if (empty($message)) {
        $errors[] = 'Message is required';
    } elseif (strlen($message) < 10) {
        $errors[] = 'Message must be at least 10 characters long';
    }
    
    // Check for spam (basic honeypot)
    if (isset($_POST['website']) && !empty($_POST['website'])) {
        $errors[] = 'Spam detected';
    }
    
    // If there are validation errors, return them
    if (!empty($errors)) {
        $response['message'] = implode(', ', $errors);
        echo json_encode($response);
        exit;
    }
    
    // Prepare email content
    $subject = $config['subject_prefix'] . date('Y-m-d H:i:s');
    
    $emailMessage = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #B9975B; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #B9975B; }
            .value { margin-top: 5px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>New Contact Form Submission</h2>
                <p>Vetiver Grand Website</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">' . htmlspecialchars($name) . '</div>
                </div>
                <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">' . htmlspecialchars($email) . '</div>
                </div>';
    
    if (!empty($phone)) {
        $emailMessage .= '
                <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value">' . htmlspecialchars($phone) . '</div>
                </div>';
    }
    
    $emailMessage .= '
                <div class="field">
                    <div class="label">Message:</div>
                    <div class="value">' . nl2br(htmlspecialchars($message)) . '</div>
                </div>
                <div class="field">
                    <div class="label">Submitted:</div>
                    <div class="value">' . date('Y-m-d H:i:s') . '</div>
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from the Vetiver Grand contact form.</p>
                <p>Please reply directly to the sender\'s email address: ' . htmlspecialchars($email) . '</p>
            </div>
        </div>
    </body>
    </html>';
    
    // Send email
    $mailSent = sendEmail(
        $config['recipient_email'],
        $subject,
        $emailMessage,
        $config['from_email'],
        $config['from_name']
    );
    
    if ($mailSent) {
        $response['success'] = true;
        $response['message'] = 'Thank you for your message! We will get back to you soon.';
        
        // Optional: Send auto-reply to customer
        $autoReplySubject = 'Thank you for contacting Vetiver Grand';
        $autoReplyMessage = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #B9975B; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; background-color: #f9f9f9; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>Thank You for Contacting Vetiver Grand</h2>
                </div>
                <div class="content">
                    <p>Dear ' . htmlspecialchars($name) . ',</p>
                    <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
                    <p>If you have any urgent inquiries, please call us directly.</p>
                    <p>Best regards,<br>The Vetiver Grand Team</p>
                </div>
                <div class="footer">
                    <p>Vetiver Grand | New Bypass Road, Panagar, Jabalpur, Madhya Pradesh</p>
                </div>
            </div>
        </body>
        </html>';
        
        // Send auto-reply
        sendEmail(
            $email,
            $autoReplySubject,
            $autoReplyMessage,
            $config['from_email'],
            $config['from_name']
        );
        
    } else {
        $response['message'] = 'Sorry, there was an error sending your message. Please try again or contact us directly.';
    }
    
} catch (Exception $e) {
    // Log error (in production, you might want to log this to a file)
    error_log('Contact form error: ' . $e->getMessage());
    
    $response['message'] = 'An unexpected error occurred. Please try again later.';
}

// Return JSON response
echo json_encode($response);

// Optional: Log form submissions (for analytics/debugging)
if ($response['success']) {
    $logEntry = date('Y-m-d H:i:s') . ' - Contact form submission from: ' . $email . ' (' . $name . ')' . PHP_EOL;
    file_put_contents('contact_log.txt', $logEntry, FILE_APPEND | LOCK_EX);
}
?>


