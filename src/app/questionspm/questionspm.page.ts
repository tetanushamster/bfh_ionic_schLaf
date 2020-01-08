import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import { format } from 'url';

@Component({
  selector: 'app-questionspm',
  templateUrl: './questionspm.page.html',
  styleUrls: ['./questionspm.page.scss'],
})
export class QuestionspmPage implements OnInit {

  public now: Date = new Date();
  constructor( private firestore: AngularFirestore, private router: Router ) { }

  ngOnInit() {
  }

//data: string;
  logForm(form) { 
    return new Promise<String>((resolve, reject) =>{
    this.firestore
          .collection("protocolpm")
          .add({q1: form.a1, q2: form.a2, q3: form.a3, q4: form.a4, q5: form.a5, q6: form.a6, q7: form.a7, user: 'dummy', time: this.now})
          .then(res => {this.router.navigateByUrl('/protocol')}, err => reject(err));
        });
        
  }

  private selectedLink: string="false";        
  
  setradio(e: string): void   
  {  
      this.selectedLink = e;        
  }  
  
    isSelected(name: string): boolean   
  {  
          if (!this.selectedLink) {
            return false;  
  }  
          return (this.selectedLink === name);
    }  
  

  questions: Array<{ row: string, answer: string, set: boolean, nextbtn: boolean }> = [
    { row: 'Guten Abend! Ich werde Ihnen nun einige Fragen stellen, um einen neuen Abendeintrag zu erfassen.', answer: '0', set: true, nextbtn: true },
    { row: 'Wie war Ihre Müdigkeit durch den Tag? (1=keine Tagesmüdigkeit / 8=starke Tagesmüdigkeit)', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 1', answer: '1', set: false, nextbtn: false },
    { row: 'Wie war Ihre Konzentrationsfähigkeit? (1=sehr unkonzentriert / 8=sehr konzentriert)', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 2', answer: '2', set: false, nextbtn: false },
    { row: 'Wie war Ihre generelle Stimmung? (1=sehr schlechte Stimmung / 8=sehr gute Stimmung)', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 3', answer: '3', set: false, nextbtn: false },
    { row: 'Haben Sie während dem Tag geschlafen? (wie z.B. Mittagsschlaf, Nickerchen vor TV etc.)', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 4', answer: '4', set: false, nextbtn: false },
    { row: 'Haben Sie Genussmittel zu sich genommen? (wie z.B. Kaffee, Tee, Cola, Alkohol)', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 5', answer: '5', set: false, nextbtn: false },
    { row: 'Wie entspannt fühlen Sie sich im Moment? (1=sehr angespannt / 8=sehr entspannt)', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 6', answer: '6', set: false, nextbtn: false },
    { row: 'Gab es heute ein besonderes Ereignis?', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 7', answer: '7', set: false, nextbtn: false },
  ];

// This function will allow you to make a ion-input become a simple text display when users finishes to input the phoneNotice item
next(index){
    // We set the phoneNotice at given index completed
    this.questions[index + 1].set = true;
    this.questions[index + 2].set = true;
    this.questions[index].nextbtn = false;
    this.questions[index + 2].nextbtn = true;
    
}
}
