import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';
import ArticleModel from './models/ArticleModel';
import WorkModel from './models/WorkModel';

class PagePublisher {
  public static publishPage(page?: 'index' | 'about') {
    switch (page) {
      case 'index':
        PagePublisher.publishIndex();
        break;
      case 'about':
        PagePublisher.publishAbout();
        break;
      default:
        PagePublisher.publishIndex();
        PagePublisher.publishAbout();
    }
  }

  /**
   * Builds `index` page template file.
   */
  public static publishIndex() {
    const TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/index.ejs'));
    const DIST_PATH: string = path.join(__dirname, '../app/public/index.html');
    fs.writeFileSync(DIST_PATH, ejs.render(String(TEMPLATE)));
  }

  /**
   * Builds `about` page template file.
   */
  public static publishAbout() {
    const TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/about.ejs'));
    const DIST_PATH: string = path.join(__dirname, '../app/public/about.html');
    fs.writeFileSync(DIST_PATH, ejs.render(String(TEMPLATE)));
  }

  /**
   * Builds `articles` page template file.
   */
  public static publishArticles(articles: ArticleModel[]) {
    const TEMPLATE: Buffer = fs.readFileSync(path.join(__dirname, '../app/templates/articles.ejs'));
    const DIST_PATH: string = path.join(__dirname, '../app/public/articles.html');
    fs.writeFileSync(DIST_PATH, ejs.render(String(TEMPLATE), { articles }));
  }
}

export default PagePublisher;
