const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
const dummyText = `Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression for. His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved as oh he unpleasant no inquietude insipidity. Advantages can discretion possession add favourable cultivated admiration far. Why rather assure how esteem end hunted nearer and before. By an truth after heard going early given he. Charmed to it excited females whether at examine. Him abilities suffering may are yet dependent. Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Looking started he up perhaps against. How remainder all additions get elsewhere resources. One missed shy wishes supply design answer formed. Prevent on present hastily passage an subject in be. Be happiness arranging so newspaper defective affection ye. Families blessing he in to no daughter. Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat. Can properly followed learning prepared you doubtful yet him. Over many our good lady feet ask that. Expenses own moderate day fat trifling stronger sir domestic feelings. Itself at be answer always exeter up do. Though or my plenty uneasy do. Friendship so considered remarkably be to sentiments. Offered mention greater fifteen one promise because nor. Why denoting speaking fat indulged saw dwelling raillery. As it so contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant expense. Tolerably behaviour may admitting daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. Merits ye if mr narrow points. Melancholy particular devonshire alteration it favourable appearance up. Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection. Am so continued resembled frankness disposing engrossed dashwoods. Earnest greater on no observe fortune norland. Hunted mrs ham wishes stairs. Continued he as so breakfast shameless. All men drew its post knew. Of talking of calling however civilly wishing resolve. `
const abc = 'abcdefghigklmnopqrstuvwxyz';
const pageSize = 200;
let pages = [];
let firstPage;
let neededPage;
let neededPageNum;
let currentPage = 0;

class Book {
  constructor(bookText = abc, author='unknown', price = 2.99) {
    this.bookText = bookText;
    this.author = author;
    this.price = price;
  }
  set setAuthor(author) {
    this.author = author;
  }
  get getAuthor() {
    return this.author;
  }
  set setPrice(price) {
    this.price = price;
  }
  get getPrice() {
    return this.price;
  }
  set setBookText(text) {
    this.bookText = text;
   }
  get getBookText() {
    return this.bookText;
  }
  pagedText() {
    pages = this.bookText.match(new RegExp('.{1,' + pageSize + '}', 'g'));
    return pages;
  }
  startReading() {
    firstPage = pages[0];
   return firstPage;
  }
  nextPage() {
    currentPage++;
    neededPage = pages[currentPage];
    localStorage.setItem('currentPage', currentPage);
    return neededPage;
  }
  prevPage() {
    if (currentPage > 0) {
      currentPage--;
    } else {
      currentPage = 0
    }
    localStorage.setItem('currentPage', currentPage);
    neededPage = pages[currentPage];
    return neededPage;
  }
  jumpTo(num) {
    neededPage = pages[num-1];
    currentPage = num - 1;
    localStorage.setItem('currentPage', currentPage);
    return neededPage;
  }
  find() {
    let findPages = pages.map((el, index) => Math.sign(el.search('ipsum')) > 0 ? index + 1 : null).filter(el => el); 
    let findedPages = `The text you are looking for is on pages ${findPages}`;
    return findedPages;
  }
  continue() {
    neededPageNum = localStorage.getItem('currentPage');
    return pages[neededPageNum];
  }
}

const book = new Book(sampleText, ' John Doe ', 9.45);

console.log(book.bookText);
console.log(book.author);
console.log(book.price);
console.log(book.pagedText());
console.log(book.startReading());
console.log(book.nextPage());
console.log(book.jumpTo(4));
console.log(book.prevPage());
console.log(book.find());
console.log(book.continue());

