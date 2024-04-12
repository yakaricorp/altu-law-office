import coverageSummary from '../__coverage__/coverage-summary.json' assert { type: 'json' }
import { ok, equal } from 'node:assert'

const COV_THRESHOLD = 10 // percentage
const { total } = coverageSummary
ok(total, 'Coverage report not found.')
equal(total.lines.pct < COV_THRESHOLD, false, `Coverage is under the ${COV_THRESHOLD}% threshold!`)
