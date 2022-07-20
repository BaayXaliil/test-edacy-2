import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  programForm: FormGroup | any;
  sidebar_show: boolean = false;
  favicon: string | ArrayBuffer | null = null;
  logo: string | ArrayBuffer | null = null;
  files: any = [];
  date: string | null = null
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.programForm = this.fb.group({
      title: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      learning: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      weeks: new FormControl('', Validators.required),
      hours: new FormControl('', Validators.required),
      prerequisite: new FormControl('', Validators.required),
      certification: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      fileImage: new FormControl('', Validators.required),
      fileVideo: new FormControl('', Validators.required),
    })
    this.date = new Date().toISOString().split('T')[0]
  }

  onCreateProgram() {
    console.log(this.programForm.value);
    
  }

  onChangeDate(date: any) {
    console.log(this.date);
  }

  onFileChangeFav(e: any) {
    if (e.target.files.length == 0) return;
    this.files[0] = e.target.files[0]
    this.createImage(e.target.files[0], "image");
  }
  onFileChangeLogo(e: any) {
    if (e.target.files.length == 0) return;
    this.files[1] = e.target.files[0]
    console.log(this.files);
    
    this.createImage(e.target.files[0], "video");
  }
  createImage(file: any, img: any) {
    var reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        if (img == "image") {
          this.favicon = e.target.result;
        }
          
        if (img == "video") {
          this.logo = e.target.result;
        }
      }
    };
    reader.readAsDataURL(file);
  }


}
