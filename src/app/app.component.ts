import { Component } from '@angular/core';

interface PostList {
  title: string;
  content: string;
  loveIts: number;
  create_at: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = "My blog";
    postLists: Array<PostList> = [
      {title: "What is Lorem Ipsum?",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      loveIts: 0,
      create_at: new Date(),
      },
      {title: "Why do we use it?",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      loveIts: 0,
      create_at: new Date(),
      },
      {title: "Where does it come from?",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      loveIts: 0,
      create_at: new Date(),
      },
      {title: "Where can I get some",
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
      loveIts: 0,
      create_at: new Date(),
      }
    ];


}
