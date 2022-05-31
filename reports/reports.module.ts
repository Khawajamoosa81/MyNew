import * as allEmpEffects from './../../store/settings/company/company.effects';
import * as company from './../../store/settings/company/company.reducer';
import * as anuualLeavEffects from './../../store/account/annualLeaveTransaction/annualLeaveTransaction.effects';
import * as annualLeaves from './../../store/account/annualLeaveTransaction/annualLeaveTransaction.reducer';
import * as qualificationEffects from './../../store/hrms/qualificatio/qualificatio.effects';
import * as employeeSalCombinEffects from './../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.effects';
import * as designEffects from './../../store/hrms/desgination/desgination.effects';
import * as secEffects from './../../store/hrms/section/section.effects';
import * as departmentSectionEffects from './../../store/hrms/departmentssection/departmentssection.effects';
import * as companyBranchEffects from './../../store/hrms/companybranche/companybranche.effects';
import * as empCompanyEffects from './../../store/employee/empCompanyInf/empCompanyInf.effects';
import * as carEffects from './../../store/hrms/car/car.effects';
import * as cardEffects from './../../store/employee/card1/card1.effects';
import * as employeeffects from './../../store/employee/employe/employe.effects';
import * as visitorseffect from './../../store/visitors/visitors.effects';
import { EffectsModule } from '@ngrx/effects';
import * as empQual from './../../store/hrms/qualificatio/qualificatio.reducer';
import * as empSal from './../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.reducer';
import * as desgination from './../../store/hrms/desgination/desgination.reducer';
import * as sections from './../../store/hrms/section/section.reducer';
import * as departmentssection from './../../store/hrms/departmentssection/departmentssection.reducer';
import * as companybranche from './../../store/hrms/companybranche/companybranche.reducer';
import * as empCompanyInf from './../../store/employee/empCompanyInf/empCompanyInf.reducer';
import * as car from './../../store/hrms/car/car.reducer';
import * as  card1 from './../../store/employee/card1/card1.reducer';
import * as  employe from './../../store/employee/employe/employe.reducer';
import * as visitors from './../../store/visitors/visitors.reducer';
import { StoreModule } from '@ngrx/store';
import { DeathGrantCaseComponent } from './reports-form/death-grant-case/death-grant-case.component';
import { MarriageGrantCaseComponent } from './reports-form/marriage-grant-case/marriage-grant-case.component';
import { JobPermanentLetterComponent } from './reports-form/job-permanent-letter/job-permanent-letter.component';
import { ServicesCertificateComponent } from './reports-form/services-certificate/services-certificate.component';
import { DisableEmpListComponent } from './reports-form/disable-emp-list/disable-emp-list.component';
import { NoticesComponent } from './reports-form/notices/notices.component';
import { EmpBranchLogComponent } from './reports-form/emp-branch-log/emp-branch-log.component';
import { SectionWiseEmpCountComponent } from './reports-form/section-wise-emp-count/section-wise-emp-count.component';
import { TerminationLetterComponent } from './reports-form/termination-letter/termination-letter.component';
import { EmpShiftLogComponent } from './reports-form/emp-shift-log/emp-shift-log.component';
import { ServiceCertificateComponent } from './reports-form/service-certificate/service-certificate.component';
import { EmpTrackingComponent } from './reports-form/emp-tracking/emp-tracking.component';
import { EmpSalLogComponent } from './reports-form/emp-sal-log/emp-sal-log.component';
import { EmpListsComponent } from './reports-form/emp-lists/emp-lists.component';
import { EmpListComponent } from './reports-form/emp-list/emp-list.component';
import { EmpGLogComponent } from './reports-form/emp-glog/emp-glog.component';
import { EmpGdLogComponent } from './reports-form/emp-gd-log/emp-gd-log.component';
import { EmpDepLogComponent } from './reports-form/emp-dep-log/emp-dep-log.component';
import { EmpCPrintingComponent } from './reports-form/emp-cprinting/emp-cprinting.component';
import { EmpCCertificateComponent } from './reports-form/emp-ccertificate/emp-ccertificate.component';
import { EmpCardCopyComponent } from './reports-form/emp-card-copy/emp-card-copy.component';
import { EmpAppointComponent } from './reports-form/emp-appoint/emp-appoint.component';
import { EmpExLetterComponent } from './reports-form/emp-ex-letter/emp-ex-letter.component';
import { ReportsFormComponent } from './reports-form/reports-form.component';
import { ReportsComponent } from './reports.component';
import { RouterModule } from '@angular/router';
import { EmpJobTypeLogComponent } from './reports-form/emp-job-type-log/emp-job-type-log.component';
import { EmpListAllInfoComponent } from './reports-form/emp-list-all-info/emp-list-all-info.component';
import { PanelsModule } from './../../../shared/panels/panels.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxBarcodeModule } from 'ngx-barcode';
import { NgSelectModule } from '@ng-select/ng-select';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CustomFormsModule } from 'src/app/shared/forms';
import { DialogsModule } from 'src/app/shared/dialogs/dialogs.module';
import { CustomTablesModule } from 'src/app/shared/custom-tables';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeptWiseReportsComponent } from './dept-wise-reports/dept-wise-reports.component';
import { DeptWiseReportsFormComponent } from './dept-wise-reports/dept-wise-reports-form/dept-wise-reports-form.component';
import { DateWiseReportsComponent } from './date-wise-reports/date-wise-reports.component';
import { DateWiseReportsFormComponent } from './date-wise-reports/date-wise-reports-form/date-wise-reports-form.component';
import { AllowAndDedReportsComponent } from './allow-and-ded-reports/allow-and-ded-reports.component';
import { AllowAndDedReportsFormComponent } from './allow-and-ded-reports/allow-and-ded-reports-form/allow-and-ded-reports-form.component';
import { MiscReportsComponent } from './misc-reports/misc-reports.component';
import { MiscReportsFormComponent } from './misc-reports/misc-reports-form/misc-reports-form.component';
import { AdvanceReportsComponent } from './advance-reports/advance-reports.component';
import { AdvanceReportsFormComponent } from './advance-reports/advance-reports-form/advance-reports-form.component';
import { BonusReportsComponent } from './bonus-reports/bonus-reports.component';
import { BonusReportsFormComponent } from './bonus-reports/bonus-reports-form/bonus-reports-form.component';
import { AnnualLeavesReportComponent } from './annual-leaves-report/annual-leaves-report.component';
import { AnnualLeavesReportFormComponent } from './annual-leaves-report/annual-leaves-report-form/annual-leaves-report-form.component';
import { EvaluationReportsComponent } from './evaluation-reports/evaluation-reports.component';
import { EvaluationReportsFormComponent } from './evaluation-reports/evaluation-reports-form/evaluation-reports-form.component';
import { EmpListDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/emp-list-deptt-wise/emp-list-deptt-wise.component';
import { GradeDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/grade-deptt-wise/grade-deptt-wise.component';
import { ShiftDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/shift-deptt-wise/shift-deptt-wise.component';
import { JobTypeDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/job-type-deptt-wise/job-type-deptt-wise.component';
import { BloodGroupDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/blood-group-deptt-wise/blood-group-deptt-wise.component';
import { MartialStatusDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/martial-status-deptt-wise/martial-status-deptt-wise.component';
import { GenderDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/gender-deptt-wise/gender-deptt-wise.component';
import { ReligionDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/religion-deptt-wise/religion-deptt-wise.component';
import { EmploymentDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/employment-deptt-wise/employment-deptt-wise.component';
import { EmpCategoryDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/emp-category-deptt-wise/emp-category-deptt-wise.component';
import { QualificationDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/qualification-deptt-wise/qualification-deptt-wise.component';
import { SecCodeDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/sec-code-deptt-wise/sec-code-deptt-wise.component';
import { MissPicListDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/miss-pic-list-deptt-wise/miss-pic-list-deptt-wise.component';
import { SeniorityListDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/seniority-list-deptt-wise/seniority-list-deptt-wise.component';
import { PerfAppFormSMDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/perf-app-form-sm-deptt-wise/perf-app-form-sm-deptt-wise.component';
import { PerfAppFormJMDepttWiseComponent } from './dept-wise-reports/dept-wise-reports-form/perf-app-form-jm-deptt-wise/perf-app-form-jm-deptt-wise.component';
import { EmpTurnOverDateWiseComponent } from './date-wise-reports/date-wise-reports-form/emp-turn-over-date-wise/emp-turn-over-date-wise.component';
import { NewJoiningDateWiseComponent } from './date-wise-reports/date-wise-reports-form/new-joining-date-wise/new-joining-date-wise.component';
import { CardExpiryDateWiseComponent } from './date-wise-reports/date-wise-reports-form/card-expiry-date-wise/card-expiry-date-wise.component';
import { NoticesDateWiseComponent } from './date-wise-reports/date-wise-reports-form/notices-date-wise/notices-date-wise.component';
import { ListOfLeftEmpDateWiseComponent } from './date-wise-reports/date-wise-reports-form/list-of-left-emp-date-wise/list-of-left-emp-date-wise.component';
import { ProbationEndDateWiseComponent } from './date-wise-reports/date-wise-reports-form/probation-end-date-wise/probation-end-date-wise.component';
import { PendingSalaryStatusDateWiseComponent } from './date-wise-reports/date-wise-reports-form/pending-salary-status-date-wise/pending-salary-status-date-wise.component';
import { LeftEmpLetterDateWiseComponent } from './date-wise-reports/date-wise-reports-form/left-emp-letter-date-wise/left-emp-letter-date-wise.component';
import { OverTimePreCalcSummaryDateWiseComponent } from './date-wise-reports/date-wise-reports-form/over-time-pre-calc-summary-date-wise/over-time-pre-calc-summary-date-wise.component';
import { OverTimePreCalDateWiseComponent } from './date-wise-reports/date-wise-reports-form/over-time-pre-cal-date-wise/over-time-pre-cal-date-wise.component';
import { DailyListOfWorksWWork8HDateWiseComponent } from './date-wise-reports/date-wise-reports-form/daily-list-of-works-wwork8-h-date-wise/daily-list-of-works-wwork8-h-date-wise.component';
import { InActiveEOBIListDateWiseComponent } from './date-wise-reports/date-wise-reports-form/in-active-eobilist-date-wise/in-active-eobilist-date-wise.component';
import { SalaryAnalysisReportDateWiseComponent } from './date-wise-reports/date-wise-reports-form/salary-analysis-report-date-wise/salary-analysis-report-date-wise.component';
import { EmpMonthlyReportDateWiseComponent } from './date-wise-reports/date-wise-reports-form/emp-monthly-report-date-wise/emp-monthly-report-date-wise.component';
import { SpecialAllowAllowAndDedComponent } from './allow-and-ded-reports/allow-and-ded-reports-form/special-allow-allow-and-ded/special-allow-allow-and-ded.component';
import { MealAllowAllowAndDedComponent } from './allow-and-ded-reports/allow-and-ded-reports-form/meal-allow-allow-and-ded/meal-allow-allow-and-ded.component';
import { TravelAllowAllowAndDedComponent } from './allow-and-ded-reports/allow-and-ded-reports-form/travel-allow-allow-and-ded/travel-allow-allow-and-ded.component';
import { EduAllowAllowAndDedComponent } from './allow-and-ded-reports/allow-and-ded-reports-form/edu-allow-allow-and-ded/edu-allow-allow-and-ded.component';
import { AccomAllowAllowAndDedComponent } from './allow-and-ded-reports/allow-and-ded-reports-form/accom-allow-allow-and-ded/accom-allow-allow-and-ded.component';
import { TaxDeductionAllowAndDedComponent } from './allow-and-ded-reports/allow-and-ded-reports-form/tax-deduction-allow-and-ded/tax-deduction-allow-and-ded.component';
import { RentDeductionAllowAndDedComponent } from './allow-and-ded-reports/allow-and-ded-reports-form/rent-deduction-allow-and-ded/rent-deduction-allow-and-ded.component';
import { CanteenDeductionAllowAndDedComponent } from './allow-and-ded-reports/allow-and-ded-reports-form/canteen-deduction-allow-and-ded/canteen-deduction-allow-and-ded.component';
import { UnionFundAllowAndDedaComponent } from './allow-and-ded-reports/allow-and-ded-reports-form/union-fund-allow-and-deda/union-fund-allow-and-deda.component';
import { EobiContribMMiscReportsComponent } from './misc-reports/misc-reports-form/eobi-contrib-m-misc-reports/eobi-contrib-m-misc-reports.component';
import { EmpAgeAtTheTimeOfJoinMiscReportsComponent } from './misc-reports/misc-reports-form/emp-age-at-the-time-of-join-misc-reports/emp-age-at-the-time-of-join-misc-reports.component';
import { EobiReportWebSiteMiscReportsComponent } from './misc-reports/misc-reports-form/eobi-report-web-site-misc-reports/eobi-report-web-site-misc-reports.component';
import { EmpHygieneCardMiscReportsComponent } from './misc-reports/misc-reports-form/emp-hygiene-card-misc-reports/emp-hygiene-card-misc-reports.component';
import { ActiveEobiListMiscReportsComponent } from './misc-reports/misc-reports-form/active-eobi-list-misc-reports/active-eobi-list-misc-reports.component';
import { SalarySlipsMiscReportsComponent } from './misc-reports/misc-reports-form/salary-slips-misc-reports/salary-slips-misc-reports.component';
import { InActiveEobiListMiscReportsComponent } from './misc-reports/misc-reports-form/in-active-eobi-list-misc-reports/in-active-eobi-list-misc-reports.component';
import { SalaryReceivingListMiscReportsComponent } from './misc-reports/misc-reports-form/salary-receiving-list-misc-reports/salary-receiving-list-misc-reports.component';
import { PessiContribMMiscReportsComponent } from './misc-reports/misc-reports-form/pessi-contrib-m-misc-reports/pessi-contrib-m-misc-reports.component';
import { EmpListForInsuranceMiscReportsComponent } from './misc-reports/misc-reports-form/emp-list-for-insurance-misc-reports/emp-list-for-insurance-misc-reports.component';
import { PessiContribM2MiscReportsComponent } from './misc-reports/misc-reports-form/pessi-contrib-m2-misc-reports/pessi-contrib-m2-misc-reports.component';
import { EmpListForInsuranceRemovalMiscReportsComponent } from './misc-reports/misc-reports-form/emp-list-for-insurance-removal-misc-reports/emp-list-for-insurance-removal-misc-reports.component';
import { EobiFormatMMiscReportsComponent } from './misc-reports/misc-reports-form/eobi-format-m-misc-reports/eobi-format-m-misc-reports.component';
import { AnnualLeavesDueForSelectedMMiscReportsComponent } from './misc-reports/misc-reports-form/annual-leaves-due-for-selected-m-misc-reports/annual-leaves-due-for-selected-m-misc-reports.component';
import { ActivePessiListMiscReportsComponent } from './misc-reports/misc-reports-form/active-pessi-list-misc-reports/active-pessi-list-misc-reports.component';
import { UnionFundContribMMiscReportsComponent } from './misc-reports/misc-reports-form/union-fund-contrib-m-misc-reports/union-fund-contrib-m-misc-reports.component';
import { InActivePessiListMiscReportsComponent } from './misc-reports/misc-reports-form/in-active-pessi-list-misc-reports/in-active-pessi-list-misc-reports.component';
import { RejoiningEmpListMiscReportsComponent } from './misc-reports/misc-reports-form/rejoining-emp-list-misc-reports/rejoining-emp-list-misc-reports.component';
import { EmpListHavingPessiCardsMiscReportsComponent } from './misc-reports/misc-reports-form/emp-list-having-pessi-cards-misc-reports/emp-list-having-pessi-cards-misc-reports.component';
import { PessiContribFormatMiscReportsComponent } from './misc-reports/misc-reports-form/pessi-contrib-format-misc-reports/pessi-contrib-format-misc-reports.component';
import { EmpListMissingPessiCardsMiscReportsComponent } from './misc-reports/misc-reports-form/emp-list-missing-pessi-cards-misc-reports/emp-list-missing-pessi-cards-misc-reports.component';
import { EmpPessiSalaryMiscReportsComponent } from './misc-reports/misc-reports-form/emp-pessi-salary-misc-reports/emp-pessi-salary-misc-reports.component';
import { EmpListHavingDiffJoinComponent } from './misc-reports/misc-reports-form/emp-list-having-diff-join/emp-list-having-diff-join.component';
import { EmpPessiSalaryMMiscReportsComponent } from './misc-reports/misc-reports-form/emp-pessi-salary-m-misc-reports/emp-pessi-salary-m-misc-reports.component';
import { TAdvPaidAdvanceReportsComponent } from './advance-reports/advance-reports-form/tadv-paid-advance-reports/tadv-paid-advance-reports.component';
import { TAdvPaidReceAgainSalAdvanceReportsComponent } from './advance-reports/advance-reports-form/tadv-paid-rece-again-sal-advance-reports/tadv-paid-rece-again-sal-advance-reports.component';
import { TAdvSlipsAdvanceReportsComponent } from './advance-reports/advance-reports-form/tadv-slips-advance-reports/tadv-slips-advance-reports.component';
import { TAdvReceListAdvanceReportsComponent } from './advance-reports/advance-reports-form/tadv-rece-list-advance-reports/tadv-rece-list-advance-reports.component';
import { PPaidAdvanceAdvanceReportsComponent } from './advance-reports/advance-reports-form/ppaid-advance-advance-reports/ppaid-advance-advance-reports.component';
import { PPaidAdvanceAgainstAnnLAdvanceReportsComponent } from './advance-reports/advance-reports-form/ppaid-advance-against-ann-l-advance-reports/ppaid-advance-against-ann-l-advance-reports.component';
import { PAdvanceReceAdvanceReportsComponent } from './advance-reports/advance-reports-form/padvance-rece-advance-reports/padvance-rece-advance-reports.component';
import { PAdvanceBalAdvanceReportsComponent } from './advance-reports/advance-reports-form/padvance-bal-advance-reports/padvance-bal-advance-reports.component';
import { LedgerAdvanceReportsComponent } from './advance-reports/advance-reports-form/ledger-advance-reports/ledger-advance-reports.component';
import { PAdvDedAgainAnnualLAdvanceReportsComponent } from './advance-reports/advance-reports-form/padv-ded-again-annual-l-advance-reports/padv-ded-again-annual-l-advance-reports.component';
import { PAdvExpectedReturnAdvanceReportsComponent } from './advance-reports/advance-reports-form/padv-expected-return-advance-reports/padv-expected-return-advance-reports.component';
import { PAdvEmpWithZeroDedAdvanceReportsComponent } from './advance-reports/advance-reports-form/padv-emp-with-zero-ded-advance-reports/padv-emp-with-zero-ded-advance-reports.component';
import { PAdvPaidAgainBonusAdvanceReportsComponent } from './advance-reports/advance-reports-form/padv-paid-again-bonus-advance-reports/padv-paid-again-bonus-advance-reports.component';
import { RFDAdvAdvanceReportsComponent } from './advance-reports/advance-reports-form/rfdadv-advance-reports/rfdadv-advance-reports.component';
import { TAdvReceList2AdvanceReportsComponent } from './advance-reports/advance-reports-form/tadv-rece-list2-advance-reports/tadv-rece-list2-advance-reports.component';
import { TAdvAdLetterAdvanceReportsComponent } from './advance-reports/advance-reports-form/tadv-ad-letter-advance-reports/tadv-ad-letter-advance-reports.component';
import { BonusSlipsBonusReportsComponent } from './bonus-reports/bonus-reports-form/bonus-slips-bonus-reports/bonus-slips-bonus-reports.component';
import { BonusListBonusReportsComponent } from './bonus-reports/bonus-reports-form/bonus-list-bonus-reports/bonus-list-bonus-reports.component';
import { BonusSummaryBonusReportsComponent } from './bonus-reports/bonus-reports-form/bonus-summary-bonus-reports/bonus-summary-bonus-reports.component';
import { BankTransferLetterBonusReportsComponent } from './bonus-reports/bonus-reports-form/bank-transfer-letter-bonus-reports/bank-transfer-letter-bonus-reports.component';
import { EmailReportBonusReportsComponent } from './bonus-reports/bonus-reports-form/email-report-bonus-reports/email-report-bonus-reports.component';
import { PAdvDedBonusReportsComponent } from './bonus-reports/bonus-reports-form/padv-ded-bonus-reports/padv-ded-bonus-reports.component';
import { EmpEvalFormComponent } from './evaluation-reports/evaluation-reports-form/emp-eval-form/emp-eval-form.component';
import { AnnLeavesListAnnLeavesReportComponent } from './annual-leaves-report/annual-leaves-report-form/ann-leaves-list-ann-leaves-report/ann-leaves-list-ann-leaves-report.component';
import { AnnLeavesSlipsAnnLeavesReportComponent } from './annual-leaves-report/annual-leaves-report-form/ann-leaves-slips-ann-leaves-report/ann-leaves-slips-ann-leaves-report.component';
import { ListEmpEligAnnLeaveAnnLeavesReportComponent } from './annual-leaves-report/annual-leaves-report-form/list-emp-elig-ann-leave-ann-leaves-report/list-emp-elig-ann-leave-ann-leaves-report.component';
import { PAdvDedAnnLeavesReportComponent } from './annual-leaves-report/annual-leaves-report-form/padv-ded-ann-leaves-report/padv-ded-ann-leaves-report.component';
import { EmpProfileComponent } from './reports-form/emp-profile/emp-profile.component';



@NgModule({
  declarations: [ReportsComponent ,ReportsFormComponent, EmpExLetterComponent, EmpAppointComponent, EmpCardCopyComponent, EmpCCertificateComponent, 
    EmpCPrintingComponent, EmpDepLogComponent, EmpGdLogComponent, EmpGLogComponent, EmpListComponent, EmpListsComponent, EmpSalLogComponent, 
    EmpTrackingComponent, ServiceCertificateComponent, EmpShiftLogComponent, EmpListAllInfoComponent, EmpListAllInfoComponent, EmpJobTypeLogComponent, SectionWiseEmpCountComponent, EmpBranchLogComponent, TerminationLetterComponent, NoticesComponent, DisableEmpListComponent, 
   ServicesCertificateComponent, JobPermanentLetterComponent, MarriageGrantCaseComponent,
    DeathGrantCaseComponent, ServicesCertificateComponent, DeptWiseReportsComponent, DeptWiseReportsFormComponent, DateWiseReportsComponent, DateWiseReportsFormComponent, AllowAndDedReportsComponent, AllowAndDedReportsFormComponent, MiscReportsComponent, MiscReportsFormComponent, AdvanceReportsComponent, AdvanceReportsFormComponent, BonusReportsComponent, BonusReportsFormComponent, AnnualLeavesReportComponent, AnnualLeavesReportFormComponent, EvaluationReportsComponent, EvaluationReportsFormComponent, EmpListDepttWiseComponent, GradeDepttWiseComponent, ShiftDepttWiseComponent, JobTypeDepttWiseComponent, BloodGroupDepttWiseComponent, MartialStatusDepttWiseComponent, GenderDepttWiseComponent, ReligionDepttWiseComponent, EmploymentDepttWiseComponent, EmpCategoryDepttWiseComponent, QualificationDepttWiseComponent, SecCodeDepttWiseComponent, MissPicListDepttWiseComponent, SeniorityListDepttWiseComponent, PerfAppFormSMDepttWiseComponent, PerfAppFormJMDepttWiseComponent, EmpTurnOverDateWiseComponent, NewJoiningDateWiseComponent, CardExpiryDateWiseComponent, NoticesDateWiseComponent, ListOfLeftEmpDateWiseComponent, ProbationEndDateWiseComponent, PendingSalaryStatusDateWiseComponent, LeftEmpLetterDateWiseComponent, OverTimePreCalcSummaryDateWiseComponent, OverTimePreCalDateWiseComponent, DailyListOfWorksWWork8HDateWiseComponent, InActiveEOBIListDateWiseComponent, SalaryAnalysisReportDateWiseComponent, EmpMonthlyReportDateWiseComponent, SpecialAllowAllowAndDedComponent, MealAllowAllowAndDedComponent, TravelAllowAllowAndDedComponent, EduAllowAllowAndDedComponent, AccomAllowAllowAndDedComponent, TaxDeductionAllowAndDedComponent, RentDeductionAllowAndDedComponent, CanteenDeductionAllowAndDedComponent, UnionFundAllowAndDedaComponent, EobiContribMMiscReportsComponent, EmpAgeAtTheTimeOfJoinMiscReportsComponent, EobiReportWebSiteMiscReportsComponent, EmpHygieneCardMiscReportsComponent, ActiveEobiListMiscReportsComponent, SalarySlipsMiscReportsComponent, InActiveEobiListMiscReportsComponent, SalaryReceivingListMiscReportsComponent, PessiContribMMiscReportsComponent, EmpListForInsuranceMiscReportsComponent, PessiContribM2MiscReportsComponent, EmpListForInsuranceRemovalMiscReportsComponent, EobiFormatMMiscReportsComponent, AnnualLeavesDueForSelectedMMiscReportsComponent, ActivePessiListMiscReportsComponent, UnionFundContribMMiscReportsComponent, InActivePessiListMiscReportsComponent, RejoiningEmpListMiscReportsComponent, EmpListHavingPessiCardsMiscReportsComponent, PessiContribFormatMiscReportsComponent, EmpListMissingPessiCardsMiscReportsComponent, EmpPessiSalaryMiscReportsComponent, EmpListHavingDiffJoinComponent, EmpPessiSalaryMMiscReportsComponent, TAdvPaidAdvanceReportsComponent, TAdvPaidReceAgainSalAdvanceReportsComponent, TAdvSlipsAdvanceReportsComponent, TAdvReceListAdvanceReportsComponent, PPaidAdvanceAdvanceReportsComponent, PPaidAdvanceAgainstAnnLAdvanceReportsComponent, PAdvanceReceAdvanceReportsComponent, PAdvanceBalAdvanceReportsComponent, LedgerAdvanceReportsComponent, PAdvDedAgainAnnualLAdvanceReportsComponent, PAdvExpectedReturnAdvanceReportsComponent, PAdvEmpWithZeroDedAdvanceReportsComponent, PAdvPaidAgainBonusAdvanceReportsComponent, RFDAdvAdvanceReportsComponent, TAdvReceList2AdvanceReportsComponent, TAdvAdLetterAdvanceReportsComponent, BonusSlipsBonusReportsComponent, BonusListBonusReportsComponent, BonusSummaryBonusReportsComponent, BankTransferLetterBonusReportsComponent, EmailReportBonusReportsComponent, PAdvDedBonusReportsComponent, EmpEvalFormComponent, AnnLeavesListAnnLeavesReportComponent, AnnLeavesSlipsAnnLeavesReportComponent, ListEmpEligAnnLeaveAnnLeavesReportComponent, PAdvDedAnnLeavesReportComponent, EmpProfileComponent ],
  imports: [
    CommonModule,
    SharedModule,
    CustomTablesModule,
    DialogsModule,
    CustomFormsModule,
    AlertModule,
    UiModule,
    NgSelectModule,
    NgxBarcodeModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    PanelsModule,

    // store for feature
    StoreModule.forFeature(visitors.visitorsFeatureKey, visitors.reducer),
    StoreModule.forFeature(employe.employeFeatureKey, employe.reducer),
    StoreModule.forFeature(card1.card1FeatureKey, card1.reducer),
    StoreModule.forFeature(car.carFeatureKey, car.reducer),
    StoreModule.forFeature(empCompanyInf.empCompanyInfFeatureKey, empCompanyInf.reducer),
    StoreModule.forFeature(companybranche.companybrancheFeatureKey, companybranche.reducer),
    StoreModule.forFeature(departmentssection.departmentssectionFeatureKey, departmentssection.reducer),
    StoreModule.forFeature(sections.sectionFeatureKey, sections.reducer),
    StoreModule.forFeature(desgination.desginationFeatureKey, desgination.reducer),
    StoreModule.forFeature(empSal.EmployeeSalaryCombineFeatureKey, empSal.reducer),
    StoreModule.forFeature(empQual.qualificatioFeatureKey, empQual.reducer),
    StoreModule.forFeature(annualLeaves.annualLeaveTransactionFeatureKey, annualLeaves.reducer),
    StoreModule.forFeature(company.companyFeatureKey, company.reducer),

    EffectsModule.forFeature([visitorseffect.VisitorsEffects,employeeffects.EmployeEffects,cardEffects.card1Effects,carEffects.CarEffects
      , empCompanyEffects.EmpcompanyinfEffects, companyBranchEffects.CompanybrancheEffects,
      departmentSectionEffects.DepartmentssectionEffects, secEffects.SectionEffects, designEffects.DesginationEffects, employeeSalCombinEffects.EmployeesalarycombineEffects, qualificationEffects.QualificatioEffects, anuualLeavEffects.AnnualleavetransactionEffects, allEmpEffects.CompanyEffects]),

    RouterModule.forChild([
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'reports', component: ReportsComponent },
      { path: 'department-wise-reports', component: DeptWiseReportsComponent },
      { path: 'date-wise-reports', component: DateWiseReportsComponent },
      { path: 'allowance-and-deuction-reports', component: AllowAndDedReportsComponent },
      { path: 'misc-reports', component: MiscReportsComponent },
      { path: 'advance-reports', component: AdvanceReportsComponent },
      { path: 'bonus-reports', component: BonusReportsComponent },
      { path: 'annual-leaves-report', component: AnnualLeavesReportComponent },
      { path: 'evaluation-reports', component: EvaluationReportsComponent }

    ])
  ],
  entryComponents: [ReportsFormComponent, EmpExLetterComponent, EmpAppointComponent, EmpCardCopyComponent, EmpCCertificateComponent, EmpCPrintingComponent,EmpDepLogComponent, EmpGdLogComponent, EmpGLogComponent, EmpListComponent, EmpListsComponent, EmpSalLogComponent, EmpTrackingComponent, ServiceCertificateComponent, EmpShiftLogComponent, EmpListAllInfoComponent,
    SectionWiseEmpCountComponent, EmpBranchLogComponent, TerminationLetterComponent, NoticesComponent, DisableEmpListComponent, 
    JobPermanentLetterComponent, MarriageGrantCaseComponent, DeathGrantCaseComponent, ServicesCertificateComponent, ReportsComponent, DeptWiseReportsComponent, DateWiseReportsComponent, AllowAndDedReportsComponent, MiscReportsComponent, AdvanceReportsComponent, BonusReportsComponent, AnnualLeavesReportComponent, EvaluationReportsComponent, EmpProfileComponent],
  
})
export class ReportsModule { }
