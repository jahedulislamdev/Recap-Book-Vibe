import toast from "react-hot-toast";
// Function to get the list of read books from localStorage
const getReadBooks = () => {
    const ReadBooks = localStorage.getItem("ReadBooks");
    if (ReadBooks) {
        return JSON.parse(ReadBooks);
    }
    return [];
};

// Function to set a book as read and store it in localStorage
const setReadBooks = (BId) => {
    const getReadBooksData = getReadBooks();
    const isExist = getReadBooksData.find((bookId) => bookId === BId);
    if (isExist) {
        toast.error("Book already Saved", { autoClose: 500 });
    } else {
        getReadBooksData.push(BId);
        localStorage.setItem("ReadBooks", JSON.stringify(getReadBooksData)); // Save the updated array
        toast.success("Book add to Read successfully", { autoClose: 500 });
    }
};

// Function to get the wishlist from localStorage
const getWishlist = () => {
    const WishlistBooks = localStorage.getItem("wishlist");
    if (WishlistBooks) {
        return JSON.parse(WishlistBooks);
    }
    return [];
};

// Function to save a book to the wishlist in localStorage
const saveWishlist = (BId) => {
    const WishlistBooks = getWishlist();
    const ReadBooks = getReadBooks();
    const isExistInWishList = WishlistBooks.find((bookId) => bookId === BId);
    const isExistInReadBooks = ReadBooks.find((bookId) => bookId === BId);

    if (isExistInWishList) {
        toast.error("Book already Saved", { autoClose: 500 });
    } else if (isExistInReadBooks) {
        toast.error("You Already Read this Book", { autoClose: 500 });
    } else {
        WishlistBooks.push(BId);
        localStorage.setItem("wishlist", JSON.stringify(WishlistBooks)); // Save the updated array
        toast.success("Book add to wishlist successfully", { autoClose: 500 });
    }
};

export { setReadBooks, getReadBooks, saveWishlist, getWishlist };
