import { SpyObject } from './spyobject';
import { QueenTrackerService } from 'app/core/tracker/tracker.service';

export class MockTrackerService extends SpyObject {
    constructor() {
        super(QueenTrackerService);
    }

    connect() {}
}
