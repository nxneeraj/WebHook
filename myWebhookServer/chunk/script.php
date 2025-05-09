<?php
// Send a signal to the parent server
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://your_parent_server.com:3000/signal");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["message" => "Script executed"]));
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo "Response: " . $response . "\n";

// Connect to netcat on port 8778
$fp = fsockopen("127.0.0.1", 8778, $errno, $errstr, 30);
if (!$fp) {
    echo "Error: $errstr ($errno)\n";
} else {
    fwrite($fp, "Hello, netcat!\n");
    while (!feof($fp)) {
        echo fgets($fp, 1024);
    }
    fclose($fp);
}
?>
