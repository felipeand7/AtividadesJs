let user = {
  name: "Felipe",
  age: 20,
  email: "felipeand@gmail.com",
  blogposts: ["enpadão de frando", "2 receitas de pure de batata"],

  login() {
    console.log("Logado")
  },
  logout() {
    console.log("deslogado")
  },
  logBlog() {
    console.log(this.blogposts)

    this.blogposts.forEach(post => { console.log(post) })
  }
}


user.logBlog()
