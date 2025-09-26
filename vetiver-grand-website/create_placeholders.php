<?php
// Simple placeholder image generator for Vetiver Grand website

function createPlaceholderImage($width, $height, $text, $bgColor = '#B9975B', $textColor = '#FFFFFF') {
    $image = imagecreate($width, $height);
    
    // Convert hex colors to RGB
    $bgRgb = hexToRgb($bgColor);
    $textRgb = hexToRgb($textColor);
    
    $backgroundColor = imagecolorallocate($image, $bgRgb['r'], $bgRgb['g'], $bgRgb['b']);
    $textColorAllocated = imagecolorallocate($image, $textRgb['r'], $textRgb['g'], $textRgb['b']);
    
    // Fill background
    imagefill($image, 0, 0, $backgroundColor);
    
    // Add text
    $fontSize = min($width, $height) / 10;
    $textBox = imagettfbbox($fontSize, 0, 'arial.ttf', $text);
    $textWidth = $textBox[4] - $textBox[0];
    $textHeight = $textBox[5] - $textBox[1];
    
    $x = ($width - $textWidth) / 2;
    $y = ($height - $textHeight) / 2 + $textHeight;
    
    imagettftext($image, $fontSize, 0, $x, $y, $textColorAllocated, 'arial.ttf', $text);
    
    return $image;
}

function hexToRgb($hex) {
    $hex = ltrim($hex, '#');
    return [
        'r' => hexdec(substr($hex, 0, 2)),
        'g' => hexdec(substr($hex, 2, 2)),
        'b' => hexdec(substr($hex, 4, 2))
    ];
}

// Create placeholder images
$images = [
    'hero-1.jpg' => ['width' => 1920, 'height' => 1080, 'text' => 'Luxury Hotel Exterior', 'bg' => '#B9975B'],
    'hero-2.jpg' => ['width' => 1920, 'height' => 1080, 'text' => 'Elegant Interior', 'bg' => '#4B0082'],
    'celebration.jpg' => ['width' => 800, 'height' => 600, 'text' => 'Wedding Celebration', 'bg' => '#B9975B'],
    'wellness.jpg' => ['width' => 800, 'height' => 600, 'text' => 'Spa & Wellness', 'bg' => '#4B0082'],
    'rooms.jpg' => ['width' => 1920, 'height' => 1080, 'text' => 'Luxury Rooms', 'bg' => '#B9975B'],
    'imperial-hall.jpg' => ['width' => 800, 'height' => 600, 'text' => 'Imperial Hall', 'bg' => '#4B0082'],
    'royale-lawn.jpg' => ['width' => 800, 'height' => 600, 'text' => 'Royale Lawn', 'bg' => '#B9975B'],
    'suite.jpg' => ['width' => 800, 'height' => 600, 'text' => 'Luxury Suite', 'bg' => '#4B0082'],
    'deluxe-room.jpg' => ['width' => 800, 'height' => 600, 'text' => 'Deluxe Room', 'bg' => '#B9975B'],
    'pool.jpg' => ['width' => 800, 'height' => 600, 'text' => 'Infinity Pool', 'bg' => '#4B0082'],
    'gym.jpg' => ['width' => 800, 'height' => 600, 'text' => 'Fitness Center', 'bg' => '#B9975B'],
    'restaurant.jpg' => ['width' => 800, 'height' => 600, 'text' => 'Fine Dining', 'bg' => '#4B0082'],
];

foreach ($images as $filename => $config) {
    $image = createPlaceholderImage(
        $config['width'], 
        $config['height'], 
        $config['text'], 
        $config['bg']
    );
    
    imagejpeg($image, "assets/images/$filename", 90);
    imagedestroy($image);
}

echo "Placeholder images created successfully!";
?>


