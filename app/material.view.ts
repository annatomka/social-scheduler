import { Component, OnInit } from '@angular/core';

export class MaterialView implements OnInit{

    ngOnInit() {
        $.material.init();
    }
}
