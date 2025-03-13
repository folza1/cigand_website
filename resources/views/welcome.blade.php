<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>How To Install and Configure a Simple React 18 Application in Laravel 10 with Vite 3</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    @vite('resources/css/app.css')
</head>
<body>
    <div id="root"></div>
    @viteReactRefresh
    @vite('resources/js/app.js')
</body>
</html>