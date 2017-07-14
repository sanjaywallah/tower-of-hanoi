var post1 = [3, 2, 1]
var post2 = []
var post3 = []


//method Nmae:  srcToTarget
//input: array of the stack for source and targe
//output: none
function srcToTarget (sourcePost, targetPost) {
  if (targetPost.length === 0 || sourcePost[0] < targetPost[0]) {
  // ?if(sourcePost[0] < targetPost[0] && soucePost.length ==0){
    sourcePost.unshift()
    targetPost.push(sourcePost);
   } //else if () {
  //   disc = sourcePost.pop()
  //   targetPost.push(disc)
  // } else if (post1[1] < post1[2]) {
  //   disc = sourcePost.pop()
  //   targetPost.push(disc)
  // }
  return [sourcePost, targetPost]
}

// DOM manipulation

let post1Div = document.getElementById('post1')
let post2Div = document.getElementById('post2')
let post3Div = document.getElementById('post3')

// let posts = document.querySelectorAll('.')

let disc1 = document.getElementById('disc1')
let disc2 = document.getElementById('disc2')
let disc3 = document.getElementById('disc3')

let discs = [disc1, disc2, disc3]

function render () {
  post1.forEach(function (discNum) {
    discEl = discs[discNum - 1]
    post1Div.appendChild(discEl)
    // discEl = discs[discNum - 2]
    // post1Div.appendChild(disc2)
    // discEl = discs[discNum - 3]
    // post1Div.appendChild(disc1)
  })

  post2.forEach(function (discNum) {
    discEl = discs[discNum -1]
    post2Div.appendChild(discEl)
    // discEl = discs[discNum - 2]
    // post1Div.appendChild(disc2)
    // discEl = discs[discNum - 3]
    // post1Div.appendChild(disc1)
  })


  post3.forEach(function (discNum) {
    discEl = discs[discNum -1]
    post3Div.appendChild(discEl)
    // discEl = discs[discNum - 2]
    // post1Div.appendChild(disc2)
    // discEl = discs[discNum - 3]
    // post1Div.appendChild(disc1)
  })
}


// var sourcePost = null
// var targetPost = null
//
// if (!=== sourcePost) {
//  clicked post is source
// }
//
// if (sourcePost) {
// the clicked post is targetPost
// and srcToTarget(sourcePost, targetPost)
// }

//post1 = source
post1Div.addEventListener('click', function () {
  console.log('I clicked on post 1')
})

post2Div.addEventListener('click', function () {
  console.log('I clicked on post 2')
  var newPosts = srcToTarget(post1, post2)

  post1 = newPosts[0]
  post2 = newPosts[1]
  render()
  console.log(post1)
})

post3Div.addEventListener('click', function () {
  console.log('I clicked on post 3')

  var newPosts = srcToTarget(post1, post3)

  post1 = newPosts[0]
  post3 = newPosts[1]

  console.log(post1)

  render()
})
