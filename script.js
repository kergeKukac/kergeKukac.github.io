let imageData = [
    {
        photo: './images/hubble.jpg',
        title: 'Hubble űrteleszkóp',
        description: 'Szia! Üdvözöllek a Hubble űrteleszkóp fotógalériájában. A nyilakkal tudsz navigálni a képek között. Jó szórakozást kívánok!'
    },
    {
        photo: './images/bubble_nebula.jpg',
        title: 'Bubble Nebula',
        description: 'Ez a Bubble Nebula. Nagyon szép!'
    },
    {
        photo: './images/carina_nebula.jpg',
        title: 'Carina Nebula',
        description: 'Ez a Carina Nebula. Nagyon szép!'
    },
    {
        photo: './images/centaurus_a.jpg',
        title: 'Centaurus A',
        description: 'Ez a Centaurus A. Nagyon szép!'
    },
    {
        photo: './images/cone_nebula.jpg',
        title: 'Cone Nebula',
        description: 'Ez a Cone Nebula. Nagyon szép!'
    },
    {
        photo: './images/eagle_nebula.jpg',
        title: 'Eagle Nebula',
        description: 'Ez a Eagle Nebula. Nagyon szép!'
    },
    {
        photo: './images/lagoon_nebula.jpg',
        title: 'Lagoon Nebula',
        description: 'Ez a Lagoon Nebula. Nagyon szép!'
    }
];

let currentPhoto = 0;
let currentHover = 0;


let loadFrame = (photoNumber) => {
    $('#mainImage').attr('src', imageData[photoNumber].photo);
    $('#title').text(imageData[photoNumber].title);
    $('#descript').text(imageData[photoNumber].description);
    $('.thumbnails').css({"width":"120px" , "height":"120px"});
    $('#' + photoNumber).css({"width":"140px" , "height":"140px"});
    $('.thumbnails').css({"border":"solid 1px black"});
    $('#' + photoNumber).css({"border":"solid 5px black"});
}

loadFrame(currentPhoto);

for (let i = 0; i < imageData.length; i++) {
    $('#galery').append("<img class='thumbnails' id=" + i + " src='" + imageData[i].photo + "'/>");
}

$('.thumbnails').click(() => {
    currentPhoto = $(event.target).attr('id');
    loadFrame(currentPhoto);
})

$('#arrowBackward').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
        loadFrame(currentPhoto);
    }
})

$('#arrowForward').click(() => {
    if (currentPhoto < imageData.length - 1) {
        currentPhoto++;
        loadFrame(currentPhoto);
    }
})

$(".thumbnails").hover(function() {
    currentHover = $(event.target).attr('id');
    $(this).css('cursor','pointer').attr('title', imageData[currentHover].title);
}, function() {
    $(this).css('cursor','auto');
});