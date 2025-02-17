const Blog = require('../models/blog')
const User = require('../models/user')
require('dotenv').config()

const initialBlogs = [
  {
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7
  },
  {
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5
  }
]

const fakeId = async () => {
  const blog = new Blog({ title: 'toBeDeleted' })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDB = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDB = async () => {
  const users = await User.find({})
  return users.map(user => user.toJSON())
}

const testUser = JSON.parse(process.env.TEST_USER)

module.exports = {
  initialBlogs,
  fakeId,
  blogsInDB,
  usersInDB, 
  testUser
}