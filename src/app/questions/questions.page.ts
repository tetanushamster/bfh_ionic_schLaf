import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  

  qlist=[ { quest: 'Guten Morgen! Ich werde Ihnen nun einige Fragen stellen, um einen neuen Tagebucheintrag zu erfassen.',
            answertype: '0',
            nextbtn: false},
          { quest: 'Wie war die Schlafqualität?</br>(1=sehr gut / 8=sehr schlecht)',
            answertype: '1',
            nextbtn: false},
          { quest: 'Wie ist Ihr Gefühl des Erholtseins?</br>(1=sehr gut / 8=sehr schlecht)',
            answertype: '1',
            nextbtn: false},
            { quest: 'Wie war Ihre Müdigkeit beim Zubettgehen?</br>(1=keine Müdigkeit / 8=starke Müdikgeit)',
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
}
