import coverageSummary from '../__coverage__/coverage-summary.json' assert { type: 'json' }
import { ok, equal } from 'node:assert'


const [thresholdArg] = process.argv.filter(arg => arg.startsWith('--threshold='))
ok(thresholdArg, 'Coverage threshold value is undefined')
const COV_THRESHOLD = Number(thresholdArg.replace('--threshold=', ''))

const { total } = coverageSummary
ok(total, 'Coverage report not found.')
equal(total.lines.pct < COV_THRESHOLD, false, `Coverage is under the ${COV_THRESHOLD}% threshold!`)
