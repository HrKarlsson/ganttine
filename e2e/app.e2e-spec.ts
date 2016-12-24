import { GanttinePage } from './app.po';

describe('ganttine App', function() {
  let page: GanttinePage;

  beforeEach(() => {
    page = new GanttinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
