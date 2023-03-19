export const campaigns = [
    {
        pId: 1, 
        title: 'TheFox Band concert',
        category: 'Music',
        image: 'https://greenwich.edu.vn/wp-content/uploads/2018/08/austin-neill-247047-unsplash.jpg', 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, purus ac ornare rutrum, neque nulla tempus diam, at laoreet orci lectus lacinia augue. Vivamus diam quam, semper vitae turpis vel, lacinia scelerisque libero. Duis a lorem sapien. Duis quis ultricies magna. Proin sed quam eu ante molestie pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu purus tristique, pulvinar nibh vitae, maximus ante. Pellentesque commodo dapibus ornare. Sed arcu dolor, pellentesque nec tempus a, porta eget lectus. Sed lacinia vitae est nec commodo. Etiam ipsum mi, tincidunt quis augue ut, fringilla vestibulum lacus. Mauris elementum rhoncus dui, vitae imperdiet ante interdum vitae. In in urna quis mauris viverra tincidunt id eget felis.", 
        owner: "Charity A",
        location: "Ha Noi",
        target: 100, 
        amountCollected: 75, 
        deadline: 1680195600000,
        donators: [
            {
                donator: "Nguyen Van A",
                donation: 10
            },
            {
                donator: "Nguyen Van B",
                donation: 20
            },
        ],
        status: "In Progress"
    },
    {
        pId: 2,
        title: 'School for poor children',
        category: 'Children',
        image: 'https://static01.nyt.com/images/2023/01/30/multimedia/30-covid-education-01-qlbm/30-covid-education-01-qlbm-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, purus ac ornare rutrum, neque nulla tempus diam, at laoreet orci lectus lacinia augue. Vivamus diam quam, semper vitae turpis vel, lacinia scelerisque libero. Duis a lorem sapien. Duis quis ultricies magna. Proin sed quam eu ante molestie pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu purus tristique, pulvinar nibh vitae, maximus ante. Pellentesque commodo dapibus ornare. Sed arcu dolor, pellentesque nec tempus a, porta eget lectus. Sed lacinia vitae est nec commodo. Etiam ipsum mi, tincidunt quis augue ut, fringilla vestibulum lacus. Mauris elementum rhoncus dui, vitae imperdiet ante interdum vitae. In in urna quis mauris viverra tincidunt id eget felis.", 
        owner: "Saigon Children’s Charity CIO",
        location: "Da Nang",
        target: 100,
        amountCollected: 50,
        deadline: 1680195600000,
        donators: [
            {
                donator: "Nguyen Van C",
                donation: 10
            },
            {
                donator: "Nguyen Van D",
                donation: 20
            },
        ],
        status: "In Progress"
    },
    {
        pId: 3,
        title: 'Animal shelters',
        category: 'Animal',
        image: 'https://www.americanhumane.org/app/uploads/2016/08/shutterstock_282516275-1024x680.jpg',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, purus ac ornare rutrum, neque nulla tempus diam, at laoreet orci lectus lacinia augue. Vivamus diam quam, semper vitae turpis vel, lacinia scelerisque libero. Duis a lorem sapien. Duis quis ultricies magna. Proin sed quam eu ante molestie pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu purus tristique, pulvinar nibh vitae, maximus ante. Pellentesque commodo dapibus ornare. Sed arcu dolor, pellentesque nec tempus a, porta eget lectus. Sed lacinia vitae est nec commodo. Etiam ipsum mi, tincidunt quis augue ut, fringilla vestibulum lacus. Mauris elementum rhoncus dui, vitae imperdiet ante interdum vitae. In in urna quis mauris viverra tincidunt id eget felis.", 
        owner: "Charity B",
        location: "Ho Chi Minh City",
        target: 100,
        amountCollected: 100,
        deadline: 1678813200000,
        donators: [
          {
            donator: "Nguyen Van C",
            donation: 10
          },
          {
            donator: "Nguyen Van D",
            donation: 20
          },
          {
            donator: "Tran Thi A",
            donation: 50
          },
          {
            donator: "Le Thi B",
            donation: 30
          },
          {
            donator: "Pham Van E",
            donation: 15
          }
        ],
        status: "Ended"
    },
    {
      pId: 4,
      title: 'Help homeless people to have a place to live',
      category: 'Homeless',
      image: 'https://donorbox.org/nonprofit-blog/wp-content/uploads/2022/03/2022-JanFebMar-blog-images-2-1-5.png',
      description: "This is a very simple story.", 
      owner: "Charity D",
      location: "Ho Chi Minh City",
      target: 0,
      amountCollected: 500,
      deadline: 1684482253000,
      donators: [

      ],
      status: "In Progress"
  },
]

export const organizations = [
    {
      id: 1,
      name: 'Charity A',
      image: 'https://image.slidesharecdn.com/importantfactsthatyoushouldknowaboutcharityorganizations-181205070914/95/important-facts-that-you-should-know-about-charity-organizations-1-638.jpg?cb=1543993791',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula orci in bibendum vehicula. Nullam ac sapien tristique, semper mauris non, volutpat orci. Integer malesuada quam quis arcu congue finibus.',
      website: 'https://www.charitya.org',
      reviews: [
        {
          id: 1,
          author: 'John Doe',
          rating: 4,
          comment: 'This is a great charity that does important work.',
        },
        {
          id: 2,
          author: 'Jane Smith',
          rating: 2,
          comment: 'I was disappointed with the lack of transparency and communication.',
        },
      ],
      campaigns: [
        {
          id: 1,
          name: 'Clean Water Initiative',
          description: 'Provide clean water to communities in need.',
          success: true,
        },
        {
          id: 2,
          name: 'Food Bank Drive',
          description: 'Collect donations to provide food for those in need.',
          success: false,
        },
      ],
    },
    {
      id: 2,
      name: "Charity B",
      image: 'https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/international-day-of-charity-1.jpg',
      description:
        'Nulla facilisi. Donec bibendum mi lectus, vel commodo urna lacinia sit amet. Curabitur aliquet suscipit dui, at suscipit augue ullamcorper a. Integer ultrices lectus vel magna interdum, in blandit neque scelerisque. ',
      website: 'https://www.saigonchildren.com/',
      reviews: [
        {
          id: 3,
          author: 'Bob Johnson',
          rating: 5,
          comment: 'I have seen firsthand the impact this charity has on people\'s lives.',
        },
        {
          id: 4,
          author: 'Sara Lee',
          rating: 1,
          comment: 'I had a bad experience with this charity and would not recommend it.',
        },
      ],
      campaigns: [
        {
          id: 3,
          name: 'Housing Assistance Program',
          description: 'Help families in need find safe and affordable housing.',
          success: true,
        },
      ],
    },
    {
      id: 3,
      name: "Saigon Children’s Charity CIO",
      image: 'https://www.saigonchildren.com/wp-content/uploads/2021/01/1920-614-1.jpg',
      description:
        'Nulla facilisi. Donec bibendum mi lectus, vel commodo urna lacinia sit amet. Curabitur aliquet suscipit dui, at suscipit augue ullamcorper a. Integer ultrices lectus vel magna interdum, in blandit neque scelerisque. ',
      website: 'https://www.saigonchildren.com/',
      reviews: [
        {
          id: 3,
          author: 'Bob Johnson',
          rating: 5,
          comment: 'I have seen firsthand the impact this charity has on people\'s lives.',
        },
        {
          id: 4,
          author: 'Sara Lee',
          rating: 1,
          comment: 'I had a bad experience with this charity and would not recommend it.',
        },
      ],
      campaigns: [
        {
          id: 3,
          name: 'Housing Assistance Program',
          description: 'Help families in need find safe and affordable housing.',
          success: true,
        },
      ],
    },
  ];