import { Post } from "../types/cardTypes";


const generateRandomString = () => (Math.random() + 1).toString(36).substring(7);

const generateRandomNumber = () => Math.floor((Math.random() * 100) + 1);

export const homePosts: Post[] = [
    {
        postId: '1',
        postLikes: 15,
        authorName: 'Post 1',
        postTags: ['tag1', 'tag1'],
        imageTitle: 'title1',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1684779847639-fbcc5a57dfe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        authorImageUrl: 'https://images.unsplash.com/photo-1684779847639-fbcc5a57dfe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        postDescription: 'description1',
        imageDescription: 'imagedec1',
        postCommentsNumber: 2
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'Kateryna Hliznitsova',
        postTags: ['summer', 'hat'],
        imageTitle: 'title1',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1684965413310-e30e44b29755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
        authorImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        postDescription: 'description1',
        imageDescription: 'imagedec1',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'Sam',
        postTags: ['tag1', 'tag1'],
        imageTitle: 'title1',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1684777621503-dac77147f93b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        authorImageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        postDescription: '',
        imageDescription: 'imagedec1',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'Tony',
        postTags: ['wave', 'water'],
        imageTitle: 'Ocean',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9jZWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        authorImageUrl: 'https://images.unsplash.com/profile-1629712901452-511518ea34a5image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
        postDescription: 'Tall powerful cross ocean wave breaking during a dark, stormy evening. stock photo',
        imageDescription: 'Tall powerful cross ocean wave breaking during a dark, stormy evening.',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'Yahor Urbanovich',
        postTags: ['hat', 'summer', 'flower'],
        imageTitle: 'Relax',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        authorImageUrl: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
        postDescription: 'The image evokes a sense of calm and relaxation, representing the beauty and tranquility of nature',
        imageDescription: 'The image is a serene and peaceful scene of a calm.',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'Alessio Zappatore',
        postTags: ['lake', 'stream'],
        imageTitle: 'Lake',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1683209564837-abcf80dc982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        authorImageUrl: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        postDescription: 'The image evokes a sense of calm and relaxation, representing the beauty and tranquility of nature',
        imageDescription: 'The image is a serene and peaceful scene of a calm.',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'AXP Photography',
        postTags: ['architecture', 'building'],
        imageTitle: 'Architecture',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1684700432561-09c54fc1d09b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        authorImageUrl: 'https://images.unsplash.com/profile-1655673500590-96da92344ffeimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        postDescription: 'The image evokes a sense of calm and relaxation, representing the beauty and tranquility of nature',
        imageDescription: 'The image is a serene and peaceful scene of a calm.',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'Aleksandr Popov',
        postTags: ['urban', 'housing'],
        imageTitle: 'Housing',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1685009341393-fb74925216a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        authorImageUrl: 'https://images.unsplash.com/profile-fb-1502611037-1478664905d8.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        postDescription: 'The image evokes a sense of calm and relaxation, representing the beauty and tranquility of nature',
        imageDescription: 'The image is a serene and peaceful scene of a calm.',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'Adam Bignell',
        postTags: ['sea', 'town'],
        imageTitle: 'Town',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1684750582572-d69bce90ffa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        authorImageUrl: 'https://images.unsplash.com/profile-1683016120108-94feb24ab720image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        postDescription: 'The image evokes a sense of calm and relaxation, representing the beauty and tranquility of nature',
        imageDescription: 'The image is a serene and peaceful scene of a calm.',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'Carlos Torres',
        postTags: ['wire', 'power'],
        imageTitle: 'Mosque',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1684678255258-462f9c70db53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        authorImageUrl: 'https://images.unsplash.com/profile-1675847375875-6c31eb215b5dimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        postDescription: 'The image evokes a sense of calm and relaxation, representing the beauty and tranquility of nature',
        imageDescription: 'The image is a serene and peaceful scene of a calm.',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'Vitalii Khodzinskyi',
        postTags: ['wire', 'cable'],
        imageTitle: 'Natural image',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1684735675830-a494b3d61b12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
        authorImageUrl: 'https://images.unsplash.com/profile-1666027165666-57135f812f36?dpr=1&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff',
        postDescription: 'The image evokes a sense of calm and relaxation, representing the beauty and tranquility of nature',
        imageDescription: 'The image is a serene and peaceful scene of a calm.',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'Théo Malliacas',
        postTags: ['bus', 'wheel'],
        imageTitle: 'Car Images & pictures',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1684777878490-9ee3286c34d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        authorImageUrl: 'https://images.unsplash.com/profile-1666027165666-57135f812f36?dpr=1&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff',
        postDescription: 'The image evokes a sense of calm and relaxation, representing the beauty and tranquility of nature',
        imageDescription: 'The image is a serene and peaceful scene of a calm.',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'LekoArts',
        postTags: ['rocks', 'milky way'],
        imageTitle: 'Rocks',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1684737992807-470ed4fe86d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        authorImageUrl: 'https://images.unsplash.com/profile-1634128794141-9c459c3733f3image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        postDescription: 'The image evokes a sense of calm and relaxation, representing the beauty and tranquility of nature',
        imageDescription: 'The image is a serene and peaceful scene of a calm.',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'Evgeni Tcherkasski',
        postTags: ['boats', 'lake'],
        imageTitle: 'Boats',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1684748370133-92f83adba386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
        authorImageUrl: 'https://images.unsplash.com/profile-1566994430919-1e67a5d8bcf9image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        postDescription: 'The image evokes a sense of calm and relaxation, representing the beauty and tranquility of nature',
        imageDescription: 'The image is a serene and peaceful scene of a calm.',
        postCommentsNumber:  generateRandomNumber()
    },
    {
        postId: generateRandomString(),
        postLikes: generateRandomNumber(),
        authorName: 'Josh Hild',
        postTags: ['vehicle', 'fun'],
        imageTitle: 'Vehicle',
        isFavorite: false,
        postImageUrl: 'https://images.unsplash.com/photo-1684346819553-11174cbc8f05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        authorImageUrl: 'https://images.unsplash.com/profile-1652754804106-1b1e8b7c0528image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
        postDescription: 'The image evokes a sense of calm and relaxation, representing the beauty and tranquility of nature',
        imageDescription: 'The image is a serene and peaceful scene of a calm.',
        postCommentsNumber:  generateRandomNumber()
    },



];