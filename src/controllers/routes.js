import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import TrackBug from '../modules/reports/bug_track';
import TrackReportedBugs from '../modules/reports/track_reported_bugs';
import ReportBug from '../modules/reports/report_bug';

const Routes = ()=>(
    <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
        <Switch>
            <Route exact path='/' component={ReportBug} />
            <Route exact path='/report-bug' component={ReportBug} />
            <Route exact path='/track-bug' component={TrackReportedBugs} />
            {/* <Route exact path='/track-bug/:id' component={TrackBug} /> */}
        </Switch>
    </main>
)
export default Routes;