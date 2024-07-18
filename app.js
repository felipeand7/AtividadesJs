


let user = {
  name: "Felipe",
  age: 20,
  email: "felipeand@gmail.com",
  blogposts: [
    { title: "enpadão de frando", likes: 30 },
    { title: " 2 receitas de pure de batata", likes: 12 }],

  login() {
    console.log("Logado")
  },
  logout() {
    console.log("deslogado")
  },
  logBlog() {
    console.log(this.blogposts)

    this.blogposts.forEach(post => { console.log(post.title, post.likes) })
  }
}


user.logBlog()
