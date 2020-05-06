let imageData = {
    photo: './images/bubble_nebula.jpg',
    title: 'Bubble Nebula',
    description: 'Ez a Bubble Nebula. Nagyon szép!'
};

$('#mainImage').attr('src', imageData.photo);
$('#title').text(imageData.title);
$('#descript').text(imageData.description);