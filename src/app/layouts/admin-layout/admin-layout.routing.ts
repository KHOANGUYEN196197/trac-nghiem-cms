import { CreateTestAdminComponent } from './../../create-test-admin/create-test-admin.component';
import { ModalEditSubjectComponent } from './../../create-subject/modal-edit-subject/modal-edit-subject.component';
import { ModalSeenSubjectComponent } from './../../create-subject/modal-seen-subject/modal-seen-subject.component';
import { SubjectComponent } from '../../subject/subject.component';
import { InfoUserComponent } from './../../info-user/info-user.component';
import { EvaluateComponent } from './../../evaluate/evaluate.component';
import { StatisticsComponent } from './../../statistics/statistics.component';
import { FeedbackComponent } from './../../feedback/feedback.component';
import { ResultEvaluationComponent } from './../../result-evaluation/result-evaluation.component';
import { LearningInformationComponent } from './../../learning-information/learning-information.component';
import { CreateSubjectComponent } from './../../create-subject/create-subject.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'CreateSubject',      component: CreateSubjectComponent },
    { path: 'LearningInformation',      component: LearningInformationComponent },
    { path: 'ResultEvaluation',      component: ResultEvaluationComponent },
    { path: 'Feedback',      component: FeedbackComponent },
    { path: 'Statistics',      component: StatisticsComponent },
    { path: 'Evaluate',      component: EvaluateComponent },
    { path: 'InfoUser',      component: InfoUserComponent },
    { path: 'Subjetc',      component: SubjectComponent },
    { path: 'Seen-Subjetc',      component: ModalSeenSubjectComponent },
    { path: 'Update-Subjetc',      component: ModalEditSubjectComponent },
    { path: 'Create-Test-Admin',      component: CreateTestAdminComponent },


];
