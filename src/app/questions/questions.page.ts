import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

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
/*
  x=0

  public btnForward(x) {
    this.x++
  }
  public btnBack(x) {
    this.x--
  }
  */
data: string;
  logForm(form) {  
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

  /*qlist=[ { quest: 'Guten Morgen! Ich werde Ihnen nun einige Fragen stellen, um einen neuen Tagebucheintrag zu erfassen.',
            answertype: '0',
            nextbtn: false},
          { quest: 'Wie war die Schlafqualität? </br> (1=sehr gut / 8=sehr schlecht)',
            answertype: '1',
            nextbtn: false},
          { quest: 'Wie ist Ihr Gefühl des Erholtseins? </br> (1=sehr gut / 8=sehr schlecht)',
            answertype: '1',
            nextbtn: false},
            { quest: 'Wie war Ihre Müdigkeit beim Zubettgehen? </br> (1=keine Müdigkeit / 8=starke Müdikgeit)',
            answertype: '1',
            nextbtn: false},
            { quest: 'Wann sind Sie zu Bett gegangen?',
            answertype: '2',
            nextbtn: false},
            { quest: 'Was haben Sie noch im Bett gemacht?',
            answertype: '4',
            nextbtn: false},
            { quest: 'Wann haben Sie das Licht gelöscht?',
            answertype: '2',
            nextbtn: false},
            { quest: 'Geschätzte Einschlafdauer',
            answertype: '3',
            nextbtn: false},
            { quest: 'Wie oft sind Sie aufgewacht?',
            answertype: '5',
            nextbtn: false},
            { quest: 'Wie lange waren Sie dann jeweils wach?',
            answertype: '3',
            nextbtn: false},
            { quest: 'Wann sind Sie endgültig aufgewacht?',
            answertype: '2',
            nextbtn: false},
            { quest: 'Wann sind Sie morgens aufgestanden?',
            answertype: '2',
            nextbtn: false},
            { quest: 'Wie lange haben Sie geschlafen?',
            answertype: '3',
            nextbtn: false},
            { quest: 'Wie lange haben Sie insgesamt im Bett gelegen?',
            answertype: '3',
            nextbtn: false},
            { quest: 'Haben Sie Schlafmittel genommen?',
            answertype: '6',
            nextbtn: true},
          
          ]
          */
}
