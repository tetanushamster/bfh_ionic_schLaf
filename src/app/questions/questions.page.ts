import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import { format } from 'url';
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  public now: Date = new Date();
  constructor( private firestore: AngularFirestore, private router: Router ) { }

  ngOnInit() {
  }

data: string;
  logForm(form: { a1: String; a2: any; a3: any; a4: any; a5: any; a6: any; a7: any; a8: any; a9: any; a10: any; a11: any; a12: any; a13: any; a14a: any; a14b: any; a14c: any; a14d: any; a14e: any; }) {  
    return new Promise<any>((resolve, reject) =>{
    this.firestore
          .collection("protocol")
          .add({q1:  form.a1, q2: form.a2, 
            q3: form.a3, q4: form.a4, 
            q5: form.a5, q6: form.a6, 
            q7: form.a7, q8: form.a8, q9: form.a9, 
            q10: form.a10, q11: form.a11, q12: form.a12, 
            q13: form.a13, q14a: form.a14a, q14b: form.a14b, 
            q14c: form.a14c, q14d: form.a14d, 
            user: 'dummy', time: this.now})
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
    { row: 'Guten Morgen! Ich werde Ihnen nun einige Fragen stellen, um einen neuen Morgeneintrag zu erfassen.', answer: '0', set: true, nextbtn: true },
    { row: 'Wie gut haben Sie geschlafen? (1=sehr schlecht / 8=sehr gut)', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 1', answer: '1', set: false, nextbtn: false },
    { row: 'Wie erholt fühlen Sie sich? (1=schlecht erholt / 8=sehr erholt)', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 2', answer: '2', set: false, nextbtn: false },
    { row: 'Wie müde waren Sie beim Zubettgehen? (1=keine Müdigkeit / 8=starke Müdikgeit)', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 3', answer: '3', set: false, nextbtn: false },
    { row: 'Wann sind Sie zu Bett gegangen?', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 4', answer: '4', set: false, nextbtn: false },
    { row: 'Was haben Sie noch im Bett gemacht?', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 5', answer: '5', set: false, nextbtn: false },
    { row: 'Wann haben Sie das Licht gelöscht?', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 6', answer: '6', set: false, nextbtn: false },
    { row: 'Geschätzte Einschlafdauer', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 7', answer: '7', set: false, nextbtn: false },
    { row: 'Wie oft sind Sie aufgewacht?', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 8', answer: '8', set: false, nextbtn: false },
    { row: 'Wie lange waren Sie dann jeweils wach?', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 9', answer: '9', set: false, nextbtn: false },
    { row: 'Wann sind Sie endgültig aufgewacht?', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 10', answer: '10', set: false, nextbtn: false },
    { row: 'Wann sind Sie morgens aufgestanden?', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 11', answer: '11', set: false, nextbtn: false },
    { row: 'Wie lange haben Sie geschlafen?', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 12', answer: '12', set: false, nextbtn: false },
    { row: 'Wie lange haben Sie insgesamt im Bett gelegen?', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 13', answer: '13', set: false, nextbtn: false },
    { row: 'Haben Sie Schlafmittel genommen?', answer: '0', set: false, nextbtn: false },
    { row: 'Antwort 14', answer: '14', set: false, nextbtn: false },
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
