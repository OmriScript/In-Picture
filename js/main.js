'use strict';
var gCurrQuestIdx = 0;

var gQuests = createQuests();

function initGame() {
  renderQuests();
}

// return an hard-coded (ready made) array for now with at least 3 questions
function createQuests() {
  var quests = [
    { id: 1, opts: ['A dog', 'A cat', 'A panda'], correctOptIndex: 0 },
    { id: 2, opts: ['A dog', 'A cat', 'A panda'], correctOptIndex: 0 },
    { id: 3, opts: ['A dog', 'A cat', 'A panda'], correctOptIndex: 1 },
    { id: 4, opts: ['A koala', 'A sloth', 'A cat'], correctOptIndex: 1 },
  ];
  return quests;
}

function renderQuests() {
  var strHtml = '';
  for (var i = 0; i < gQuests[i].opts.length; i++) {
    strHtml += `<span onclick=checkAnswer(${i + 1}) data-quest=${i}">
    ${gQuests[gCurrQuestIdx].opts[i]}</span>`;
  }
  var elQuestContainer = document.querySelector('.quest-container');
  elQuestContainer.innerHTML = strHtml;
}

function checkAnswer(optIdx) {
  if (
    gCurrQuestIdx === gQuests.length - 1 &&
    optIdx === gQuests[gCurrQuestIdx].correctOptIndex + 1
  ) {
    showWinMsg();
  } else if (
    // answer is correct
    gCurrQuestIdx < gQuests.length &&
    optIdx === gQuests[gCurrQuestIdx].correctOptIndex + 1
  ) {
    gCurrQuestIdx++;

    renderImg(gCurrQuestIdx + 1);
    renderQuests();
  }
}

function renderImg(optIdx) {
  var elImg = document.querySelector('img');
  elImg.src = `./img/${optIdx}.jpg`;
}

//  After last question – show a 'Victorious' msg to the user and a
function showWinMsg() {
  var elP = document.querySelector('p');
  elP.style.display = 'block';
  var elBtn = document.querySelector('button');
  elBtn.style.display = 'block';
}

function hideWinMsg() {
  var elP = document.querySelector('p');
  elP.style.display = 'none';
  var elBtn = document.querySelector('button');
  elBtn.style.display = 'none';
}

function restartGame() {
  gCurrQuestIdx = 0;
  renderQuests();
  hideWinMsg();
  renderImg(1);
}
