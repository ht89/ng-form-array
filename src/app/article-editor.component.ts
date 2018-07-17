import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'article-editor',
    template: `
        <p>Tags:</p>
        <ul>
            <li *ngFor="let t of tagControls; let i = index">
                <input [formControl]="t">
                <button (click)="removeTag(i)">X</button>
            </li>
        </ul>
        <p><button (click)="addTag()">+</button></p>
        <p><button (click)="saveArticle()">Save</button></p>
    `
})

export class ArticleEditorComponent implements OnInit {
    tagControls: Array<FormControl> = [];
    tagFormArray: FormArray = new FormArray(this.tagControls);

    constructor() { }

    ngOnInit() {

    }

    addTag(): void {
        this.tagFormArray.push(new FormControl(null, Validators.required));
    }

    removeTag(index: number): void {
        this.tagFormArray.removeAt(index);
    }

    saveArticle(): void {
        if (this.tagFormArray.valid) {
            alert('Valid!');
        } else {
            alert('Missing fields');
        }
    }


}