import { displayAllConfigs, download_config, network_config, user_config } from './configs/index.ts'
import { BookmarkCrawler } from './crawlers/bookmark_crawler.ts'
import { KeywordCrawler } from './crawlers/keyword_crawler.ts'
import { UserCrawler } from './crawlers/user_crawler.ts'
import { checkPath } from './utils/checkPath.ts'

export async function downloadBookmark() {
  download_config.with_tag = false
  user_config.user_id = ''
  user_config.cookie = ''

  displayAllConfigs()
  checkPath(download_config.store_path)

  const targetCrawler = new BookmarkCrawler({ imageNum: 20, capacity: 200 })
  await targetCrawler.run()
}

export async function downloadUser() {
  user_config.user_id = ''
  user_config.cookie = ''
  download_config.with_tag = false

  displayAllConfigs()
  checkPath(download_config.store_path)

  const targetCrawler = new UserCrawler({ artistId: '12345678', capacity: 200 })
  await targetCrawler.run()
}

export async function downloadKeyword() {
  user_config.user_id = ''
  user_config.cookie = ''
  download_config.with_tag = false

  displayAllConfigs()
  checkPath(download_config.store_path)

  const targetCrawler = new KeywordCrawler({
    keyword: '(Lucy OR 边缘行者) AND (5000users OR 10000users)',
    order: false,
    mode: 'all',
    imageNum: 20,
    capacity: 200,
  })
  await targetCrawler.run()
}

function bootstrap() {
  network_config.proxy = {}
  downloadUser()
}

bootstrap()
