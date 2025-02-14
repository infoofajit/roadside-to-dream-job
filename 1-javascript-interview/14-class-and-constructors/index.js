// class Teacher {
//   constructor(name, channel, like = 0) {
//     this.name = name;
//     this.channel = channel;
//     this.like = like;
//   }

//   intro() {
//     console.log(`Hey it's ${this.name}! Welcome to ${this.channel}`);
//   }

//   likeVideo() {
//     this.like++
//     console.log(`Video like count: ${this.like}`);
//   }
// }

// // const teacher1 = new Teacher('AJ', 'ABC');
// // console.log(teacher1.intro());

// class YoutubeTeacher extends Teacher {
//   constructor(name, channel, like, subscriber) {
//     super(name, channel, like)
//     this.subscriber = subscriber;
//   }

//   paidCourse() {

//   }

//   subscriberCount() {
//     console.log(`${this.channel} has ${this.subscriber} subscribers`);
//   }
// }

// const youtubeTeacher1 = new YoutubeTeacher('AJ', 'MoiBlog', 100, '700k');

const h1 = React.createElement(
  'h1',
  {
    id: 'h1'
  },
  'Heading 1'
);

const container = React.createElement(
  'div',
  {
    id: 'container'
  },
  [h1]
)

const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(myElement);
