let ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/chrisdadev13/memory-card.git', // Update to point to your repository  
        user: {
            name: 'chrisdadev13', // update to use your name
            email: 'chrisdadev13@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
