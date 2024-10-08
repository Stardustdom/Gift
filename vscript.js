/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
  {
    id: 'a1',
    title: 'I dont remember this cuz I was high',
    name: 'I dont remember this cuz I was high.mp4',
    duration: '0:16',
  },
  {
    id: 'a2',
    title: 'Vikram to my Vetal',
    name: 'Vikram to my Vetal.mp4',
    duration: '0:30',
  },
  {
    id: 'a3',
    title: 'Ishq wala Love',
    name: 'Ishq wala Love.mp4',
    duration: '0:21',
  },

  {
    id: 'a4',
    title: 'Vibe partner',
    name: 'Vibe partner.mp4',
    duration: '0:32',
  },
  {
    id: 'a5',
    title: 'kiddo',
    name: 'kiddo.mp4',
    duration: '0:07',
  },
  {
    id: 'a6',
    title: 'SURPRISE MOFO',
    name: 'SURPRISE MOFO.mp4',
    duration: '0:25',
  },
];

data.forEach((video, i) => {
  let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
  video_playlist.innerHTML += video_element;
});

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'pause.svg';

videos.forEach(selected_video => {
  selected_video.onclick = () => {
    for (all_videos of videos) {
      all_videos.classList.remove('active');
      all_videos.querySelector('img').src = 'play.svg';
    }

    selected_video.classList.add('active');
    selected_video.querySelector('img').src = 'pause.svg';

    let match_video = data.find(video => video.id == selected_video.dataset.id);
    main_video.src = match_video.name;
    main_video_title.innerHTML = match_video.title;
  };
});
