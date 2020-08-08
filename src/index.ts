import puppeteer from 'puppeteer'
import { logger } from 'juno-js'

(async () => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({
      width: 1600,
      height: 1200,
    })
    await page.goto('https://github.com/103cuong', { waitUntil: 'networkidle2' })

    await page.screenshot({ path: 'assets/103cuong.png' })
    await page.pdf({ path: 'assets/103cuong.pdf', format: 'A4' })
    await browser.close()
  } catch(error) {
    logger().error(error)
  }
})()
