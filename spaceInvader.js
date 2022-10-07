"use strict";

DrawSpaceInvader();

function DrawSpaceInvader() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.fillStyle = 'black'
    context.beginPath();
    context.rect(100,100,300,300);
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(125,125,50,50)
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(125,175,50,50)
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(125,225,50,50)
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(125,275,50,50)
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(175,275,50,50)
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(175,325,50,50)
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(225,275,50,50)
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(275,275,50,50)
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(275,325,50,50)
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(325,275,50,50)
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(325,225,50,50)
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(325,175,50,50)
    context.fill();

    context.fillStyle = 'green'
    context.beginPath();
    context.rect(325,125,50,50)
    context.fill();


}