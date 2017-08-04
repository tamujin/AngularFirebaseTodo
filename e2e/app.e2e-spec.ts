import { AngularFirebaseTodoPage } from './app.po';

describe('angular-firebase-todo App', () => {
  let page: AngularFirebaseTodoPage;

  beforeEach(() => {
    page = new AngularFirebaseTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
