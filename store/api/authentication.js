const testUsers = [
    {
        id: 1,
        username: "@snowwhite",
        email: "snowwhite91924@gmail.com",
        image: "https://lh4.googleusercontent.com/-Ee34bQZY-Lw/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJN5jad2Gj_siNDC5ZDgkrD3gl8DhQ/s96-c/photo.jpg",
        token: '12345678'
    },
    {
        id: 2,
        username: "@testuser",
        email: "test@test.com",
        image: "https://www.nretnil.com/avatar/swag_25k.jpg",
        token: "abcdefg"
    }
]


const googleLogIn = (user) => {
    return new Promise((resolve, reject) => {
        const idx = _.findIndex(testUsers, function(it) { return it.email === user.email;});
        if ( idx != -1) {
            resolve ( testUsers[idx] )
        } else {
            reject ({
                error: true,
                message: "No User"    
            });
        }

    });
} 

const FBLogIn = (user) => {
    console.log("[api/authentication]-->facebook log in", user);
    return { "token": "1234567890"};
} 

export default {
    googleLogIn,
    FBLogIn
}