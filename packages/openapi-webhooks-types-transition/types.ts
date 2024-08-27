// THIS FILE IS GENERATED - DO NOT EDIT DIRECTLY
// make edits in scripts/generate-types.ts

import type { webhooks as OpenAPIWebhooks } from "@octokit/openapi-webhooks-types";

type WebhookEventDefinition<TEventName extends keyof OpenAPIWebhooks> =
  OpenAPIWebhooks[TEventName]["post"]["requestBody"]["content"]["application/json"];

export type BranchProtectionConfigurationEvent =
  | WebhookEventDefinition<"branch-protection-configuration-disabled">
  | WebhookEventDefinition<"branch-protection-configuration-enabled">;
export type BranchProtectionConfigurationDisabledEvent =
  WebhookEventDefinition<"branch-protection-configuration-disabled">;
export type BranchProtectionConfigurationEnabledEvent =
  WebhookEventDefinition<"branch-protection-configuration-enabled">;
export type BranchProtectionRuleEvent =
  | WebhookEventDefinition<"branch-protection-rule-created">
  | WebhookEventDefinition<"branch-protection-rule-deleted">
  | WebhookEventDefinition<"branch-protection-rule-edited">;
export type BranchProtectionRuleCreatedEvent =
  WebhookEventDefinition<"branch-protection-rule-created">;
export type BranchProtectionRuleDeletedEvent =
  WebhookEventDefinition<"branch-protection-rule-deleted">;
export type BranchProtectionRuleEditedEvent =
  WebhookEventDefinition<"branch-protection-rule-edited">;
export type CheckRunEvent =
  | WebhookEventDefinition<"check-run-completed">
  | WebhookEventDefinition<"check-run-created">
  | WebhookEventDefinition<"check-run-requested-action">
  | WebhookEventDefinition<"check-run-rerequested">;
export type CheckRunCompletedEvent =
  WebhookEventDefinition<"check-run-completed">;
export type CheckRunCreatedEvent = WebhookEventDefinition<"check-run-created">;
export type CheckRunRequestedActionEvent =
  WebhookEventDefinition<"check-run-requested-action">;
export type CheckRunRerequestedEvent =
  WebhookEventDefinition<"check-run-rerequested">;
export type CheckSuiteEvent =
  | WebhookEventDefinition<"check-suite-completed">
  | WebhookEventDefinition<"check-suite-requested">
  | WebhookEventDefinition<"check-suite-rerequested">;
export type CheckSuiteCompletedEvent =
  WebhookEventDefinition<"check-suite-completed">;
export type CheckSuiteRequestedEvent =
  WebhookEventDefinition<"check-suite-requested">;
export type CheckSuiteRerequestedEvent =
  WebhookEventDefinition<"check-suite-rerequested">;
export type CodeScanningAlertEvent =
  | WebhookEventDefinition<"code-scanning-alert-appeared-in-branch">
  | WebhookEventDefinition<"code-scanning-alert-closed-by-user">
  | WebhookEventDefinition<"code-scanning-alert-created">
  | WebhookEventDefinition<"code-scanning-alert-fixed">
  | WebhookEventDefinition<"code-scanning-alert-reopened">
  | WebhookEventDefinition<"code-scanning-alert-reopened-by-user">;
export type CodeScanningAlertAppearedInBranchEvent =
  WebhookEventDefinition<"code-scanning-alert-appeared-in-branch">;
export type CodeScanningAlertClosedByUserEvent =
  WebhookEventDefinition<"code-scanning-alert-closed-by-user">;
export type CodeScanningAlertCreatedEvent =
  WebhookEventDefinition<"code-scanning-alert-created">;
export type CodeScanningAlertFixedEvent =
  WebhookEventDefinition<"code-scanning-alert-fixed">;
export type CodeScanningAlertReopenedEvent =
  WebhookEventDefinition<"code-scanning-alert-reopened">;
export type CodeScanningAlertReopenedByUserEvent =
  WebhookEventDefinition<"code-scanning-alert-reopened-by-user">;
export type CommitCommentEvent =
  WebhookEventDefinition<"commit-comment-created">;
export type CommitCommentCreatedEvent =
  WebhookEventDefinition<"commit-comment-created">;
export type CreateEvent = WebhookEventDefinition<"create">;
export type CustomPropertyEvent =
  | WebhookEventDefinition<"custom-property-created">
  | WebhookEventDefinition<"custom-property-deleted">
  | WebhookEventDefinition<"custom-property-updated">;
export type CustomPropertyCreatedEvent =
  WebhookEventDefinition<"custom-property-created">;
export type CustomPropertyDeletedEvent =
  WebhookEventDefinition<"custom-property-deleted">;
export type CustomPropertyUpdatedEvent =
  WebhookEventDefinition<"custom-property-updated">;
export type CustomPropertyValuesEvent =
  WebhookEventDefinition<"custom-property-values-updated">;
export type CustomPropertyValuesUpdatedEvent =
  WebhookEventDefinition<"custom-property-values-updated">;
export type DeleteEvent = WebhookEventDefinition<"delete">;
export type DependabotAlertEvent =
  | WebhookEventDefinition<"dependabot-alert-auto-dismissed">
  | WebhookEventDefinition<"dependabot-alert-auto-reopened">
  | WebhookEventDefinition<"dependabot-alert-created">
  | WebhookEventDefinition<"dependabot-alert-dismissed">
  | WebhookEventDefinition<"dependabot-alert-fixed">
  | WebhookEventDefinition<"dependabot-alert-reintroduced">
  | WebhookEventDefinition<"dependabot-alert-reopened">;
export type DependabotAlertAutoDismissedEvent =
  WebhookEventDefinition<"dependabot-alert-auto-dismissed">;
export type DependabotAlertAutoReopenedEvent =
  WebhookEventDefinition<"dependabot-alert-auto-reopened">;
export type DependabotAlertCreatedEvent =
  WebhookEventDefinition<"dependabot-alert-created">;
export type DependabotAlertDismissedEvent =
  WebhookEventDefinition<"dependabot-alert-dismissed">;
export type DependabotAlertFixedEvent =
  WebhookEventDefinition<"dependabot-alert-fixed">;
export type DependabotAlertReintroducedEvent =
  WebhookEventDefinition<"dependabot-alert-reintroduced">;
export type DependabotAlertReopenedEvent =
  WebhookEventDefinition<"dependabot-alert-reopened">;
export type DeployKeyEvent =
  | WebhookEventDefinition<"deploy-key-created">
  | WebhookEventDefinition<"deploy-key-deleted">;
export type DeployKeyCreatedEvent =
  WebhookEventDefinition<"deploy-key-created">;
export type DeployKeyDeletedEvent =
  WebhookEventDefinition<"deploy-key-deleted">;
export type DeploymentEvent = WebhookEventDefinition<"deployment-created">;
export type DeploymentCreatedEvent =
  WebhookEventDefinition<"deployment-created">;
export type DeploymentProtectionRuleEvent =
  WebhookEventDefinition<"deployment-protection-rule-requested">;
export type DeploymentProtectionRuleRequestedEvent =
  WebhookEventDefinition<"deployment-protection-rule-requested">;
export type DeploymentReviewEvent =
  | WebhookEventDefinition<"deployment-review-approved">
  | WebhookEventDefinition<"deployment-review-rejected">
  | WebhookEventDefinition<"deployment-review-requested">;
export type DeploymentReviewApprovedEvent =
  WebhookEventDefinition<"deployment-review-approved">;
export type DeploymentReviewRejectedEvent =
  WebhookEventDefinition<"deployment-review-rejected">;
export type DeploymentReviewRequestedEvent =
  WebhookEventDefinition<"deployment-review-requested">;
export type DeploymentStatusEvent =
  WebhookEventDefinition<"deployment-status-created">;
export type DeploymentStatusCreatedEvent =
  WebhookEventDefinition<"deployment-status-created">;
export type DiscussionEvent =
  | WebhookEventDefinition<"discussion-answered">
  | WebhookEventDefinition<"discussion-category-changed">
  | WebhookEventDefinition<"discussion-closed">
  | WebhookEventDefinition<"discussion-created">
  | WebhookEventDefinition<"discussion-deleted">
  | WebhookEventDefinition<"discussion-edited">
  | WebhookEventDefinition<"discussion-labeled">
  | WebhookEventDefinition<"discussion-locked">
  | WebhookEventDefinition<"discussion-pinned">
  | WebhookEventDefinition<"discussion-reopened">
  | WebhookEventDefinition<"discussion-transferred">
  | WebhookEventDefinition<"discussion-unanswered">
  | WebhookEventDefinition<"discussion-unlabeled">
  | WebhookEventDefinition<"discussion-unlocked">
  | WebhookEventDefinition<"discussion-unpinned">;
export type DiscussionAnsweredEvent =
  WebhookEventDefinition<"discussion-answered">;
export type DiscussionCategoryChangedEvent =
  WebhookEventDefinition<"discussion-category-changed">;
export type DiscussionClosedEvent = WebhookEventDefinition<"discussion-closed">;
export type DiscussionCommentEvent =
  | WebhookEventDefinition<"discussion-comment-created">
  | WebhookEventDefinition<"discussion-comment-deleted">
  | WebhookEventDefinition<"discussion-comment-edited">;
export type DiscussionCommentCreatedEvent =
  WebhookEventDefinition<"discussion-comment-created">;
export type DiscussionCommentDeletedEvent =
  WebhookEventDefinition<"discussion-comment-deleted">;
export type DiscussionCommentEditedEvent =
  WebhookEventDefinition<"discussion-comment-edited">;
export type DiscussionCreatedEvent =
  WebhookEventDefinition<"discussion-created">;
export type DiscussionDeletedEvent =
  WebhookEventDefinition<"discussion-deleted">;
export type DiscussionEditedEvent = WebhookEventDefinition<"discussion-edited">;
export type DiscussionLabeledEvent =
  WebhookEventDefinition<"discussion-labeled">;
export type DiscussionLockedEvent = WebhookEventDefinition<"discussion-locked">;
export type DiscussionPinnedEvent = WebhookEventDefinition<"discussion-pinned">;
export type DiscussionReopenedEvent =
  WebhookEventDefinition<"discussion-reopened">;
export type DiscussionTransferredEvent =
  WebhookEventDefinition<"discussion-transferred">;
export type DiscussionUnansweredEvent =
  WebhookEventDefinition<"discussion-unanswered">;
export type DiscussionUnlabeledEvent =
  WebhookEventDefinition<"discussion-unlabeled">;
export type DiscussionUnlockedEvent =
  WebhookEventDefinition<"discussion-unlocked">;
export type DiscussionUnpinnedEvent =
  WebhookEventDefinition<"discussion-unpinned">;
export type ForkEvent = WebhookEventDefinition<"fork">;
export type GithubAppAuthorizationEvent =
  WebhookEventDefinition<"github-app-authorization-revoked">;
export type GithubAppAuthorizationRevokedEvent =
  WebhookEventDefinition<"github-app-authorization-revoked">;
export type GollumEvent = WebhookEventDefinition<"gollum">;
export type InstallationEvent =
  | WebhookEventDefinition<"installation-created">
  | WebhookEventDefinition<"installation-deleted">
  | WebhookEventDefinition<"installation-new-permissions-accepted">
  | WebhookEventDefinition<"installation-suspend">
  | WebhookEventDefinition<"installation-unsuspend">;
export type InstallationCreatedEvent =
  WebhookEventDefinition<"installation-created">;
export type InstallationDeletedEvent =
  WebhookEventDefinition<"installation-deleted">;
export type InstallationNewPermissionsAcceptedEvent =
  WebhookEventDefinition<"installation-new-permissions-accepted">;
export type InstallationRepositoriesEvent =
  | WebhookEventDefinition<"installation-repositories-added">
  | WebhookEventDefinition<"installation-repositories-removed">;
export type InstallationRepositoriesAddedEvent =
  WebhookEventDefinition<"installation-repositories-added">;
export type InstallationRepositoriesRemovedEvent =
  WebhookEventDefinition<"installation-repositories-removed">;
export type InstallationSuspendEvent =
  WebhookEventDefinition<"installation-suspend">;
export type InstallationTargetEvent =
  WebhookEventDefinition<"installation-target-renamed">;
export type InstallationTargetRenamedEvent =
  WebhookEventDefinition<"installation-target-renamed">;
export type InstallationUnsuspendEvent =
  WebhookEventDefinition<"installation-unsuspend">;
export type IssueCommentEvent =
  | WebhookEventDefinition<"issue-comment-created">
  | WebhookEventDefinition<"issue-comment-deleted">
  | WebhookEventDefinition<"issue-comment-edited">;
export type IssueCommentCreatedEvent =
  WebhookEventDefinition<"issue-comment-created">;
export type IssueCommentDeletedEvent =
  WebhookEventDefinition<"issue-comment-deleted">;
export type IssueCommentEditedEvent =
  WebhookEventDefinition<"issue-comment-edited">;
export type IssuesEvent =
  | WebhookEventDefinition<"issues-assigned">
  | WebhookEventDefinition<"issues-closed">
  | WebhookEventDefinition<"issues-deleted">
  | WebhookEventDefinition<"issues-demilestoned">
  | WebhookEventDefinition<"issues-edited">
  | WebhookEventDefinition<"issues-labeled">
  | WebhookEventDefinition<"issues-locked">
  | WebhookEventDefinition<"issues-milestoned">
  | WebhookEventDefinition<"issues-opened">
  | WebhookEventDefinition<"issues-pinned">
  | WebhookEventDefinition<"issues-reopened">
  | WebhookEventDefinition<"issues-transferred">
  | WebhookEventDefinition<"issues-unassigned">
  | WebhookEventDefinition<"issues-unlabeled">
  | WebhookEventDefinition<"issues-unlocked">
  | WebhookEventDefinition<"issues-unpinned">;
export type IssuesAssignedEvent = WebhookEventDefinition<"issues-assigned">;
export type IssuesClosedEvent = WebhookEventDefinition<"issues-closed">;
export type IssuesDeletedEvent = WebhookEventDefinition<"issues-deleted">;
export type IssuesDemilestonedEvent =
  WebhookEventDefinition<"issues-demilestoned">;
export type IssuesEditedEvent = WebhookEventDefinition<"issues-edited">;
export type IssuesLabeledEvent = WebhookEventDefinition<"issues-labeled">;
export type IssuesLockedEvent = WebhookEventDefinition<"issues-locked">;
export type IssuesMilestonedEvent = WebhookEventDefinition<"issues-milestoned">;
export type IssuesOpenedEvent = WebhookEventDefinition<"issues-opened">;
export type IssuesPinnedEvent = WebhookEventDefinition<"issues-pinned">;
export type IssuesReopenedEvent = WebhookEventDefinition<"issues-reopened">;
export type IssuesTransferredEvent =
  WebhookEventDefinition<"issues-transferred">;
export type IssuesUnassignedEvent = WebhookEventDefinition<"issues-unassigned">;
export type IssuesUnlabeledEvent = WebhookEventDefinition<"issues-unlabeled">;
export type IssuesUnlockedEvent = WebhookEventDefinition<"issues-unlocked">;
export type IssuesUnpinnedEvent = WebhookEventDefinition<"issues-unpinned">;
export type LabelEvent =
  | WebhookEventDefinition<"label-created">
  | WebhookEventDefinition<"label-deleted">
  | WebhookEventDefinition<"label-edited">;
export type LabelCreatedEvent = WebhookEventDefinition<"label-created">;
export type LabelDeletedEvent = WebhookEventDefinition<"label-deleted">;
export type LabelEditedEvent = WebhookEventDefinition<"label-edited">;
export type MarketplacePurchaseEvent =
  | WebhookEventDefinition<"marketplace-purchase-cancelled">
  | WebhookEventDefinition<"marketplace-purchase-changed">
  | WebhookEventDefinition<"marketplace-purchase-pending-change">
  | WebhookEventDefinition<"marketplace-purchase-pending-change-cancelled">
  | WebhookEventDefinition<"marketplace-purchase-purchased">;
export type MarketplacePurchaseCancelledEvent =
  WebhookEventDefinition<"marketplace-purchase-cancelled">;
export type MarketplacePurchaseChangedEvent =
  WebhookEventDefinition<"marketplace-purchase-changed">;
export type MarketplacePurchasePendingChangeEvent =
  WebhookEventDefinition<"marketplace-purchase-pending-change">;
export type MarketplacePurchasePendingChangeCancelledEvent =
  WebhookEventDefinition<"marketplace-purchase-pending-change-cancelled">;
export type MarketplacePurchasePurchasedEvent =
  WebhookEventDefinition<"marketplace-purchase-purchased">;
export type MemberEvent =
  | WebhookEventDefinition<"member-added">
  | WebhookEventDefinition<"member-edited">
  | WebhookEventDefinition<"member-removed">;
export type MemberAddedEvent = WebhookEventDefinition<"member-added">;
export type MemberEditedEvent = WebhookEventDefinition<"member-edited">;
export type MemberRemovedEvent = WebhookEventDefinition<"member-removed">;
export type MembershipEvent =
  | WebhookEventDefinition<"membership-added">
  | WebhookEventDefinition<"membership-removed">;
export type MembershipAddedEvent = WebhookEventDefinition<"membership-added">;
export type MembershipRemovedEvent =
  WebhookEventDefinition<"membership-removed">;
export type MergeGroupEvent =
  | WebhookEventDefinition<"merge-group-checks-requested">
  | WebhookEventDefinition<"merge-group-destroyed">;
export type MergeGroupChecksRequestedEvent =
  WebhookEventDefinition<"merge-group-checks-requested">;
export type MergeGroupDestroyedEvent =
  WebhookEventDefinition<"merge-group-destroyed">;
export type MetaEvent = WebhookEventDefinition<"meta-deleted">;
export type MetaDeletedEvent = WebhookEventDefinition<"meta-deleted">;
export type MilestoneEvent =
  | WebhookEventDefinition<"milestone-closed">
  | WebhookEventDefinition<"milestone-created">
  | WebhookEventDefinition<"milestone-deleted">
  | WebhookEventDefinition<"milestone-edited">
  | WebhookEventDefinition<"milestone-opened">;
export type MilestoneClosedEvent = WebhookEventDefinition<"milestone-closed">;
export type MilestoneCreatedEvent = WebhookEventDefinition<"milestone-created">;
export type MilestoneDeletedEvent = WebhookEventDefinition<"milestone-deleted">;
export type MilestoneEditedEvent = WebhookEventDefinition<"milestone-edited">;
export type MilestoneOpenedEvent = WebhookEventDefinition<"milestone-opened">;
export type OrgBlockEvent =
  | WebhookEventDefinition<"org-block-blocked">
  | WebhookEventDefinition<"org-block-unblocked">;
export type OrgBlockBlockedEvent = WebhookEventDefinition<"org-block-blocked">;
export type OrgBlockUnblockedEvent =
  WebhookEventDefinition<"org-block-unblocked">;
export type OrganizationEvent =
  | WebhookEventDefinition<"organization-deleted">
  | WebhookEventDefinition<"organization-member-added">
  | WebhookEventDefinition<"organization-member-invited">
  | WebhookEventDefinition<"organization-member-removed">
  | WebhookEventDefinition<"organization-renamed">;
export type OrganizationDeletedEvent =
  WebhookEventDefinition<"organization-deleted">;
export type OrganizationMemberAddedEvent =
  WebhookEventDefinition<"organization-member-added">;
export type OrganizationMemberInvitedEvent =
  WebhookEventDefinition<"organization-member-invited">;
export type OrganizationMemberRemovedEvent =
  WebhookEventDefinition<"organization-member-removed">;
export type OrganizationRenamedEvent =
  WebhookEventDefinition<"organization-renamed">;
export type PackageEvent =
  | WebhookEventDefinition<"package-published">
  | WebhookEventDefinition<"package-updated">;
export type PackagePublishedEvent = WebhookEventDefinition<"package-published">;
export type PackageUpdatedEvent = WebhookEventDefinition<"package-updated">;
export type PageBuildEvent = WebhookEventDefinition<"page-build">;
export type PersonalAccessTokenRequestEvent =
  | WebhookEventDefinition<"personal-access-token-request-approved">
  | WebhookEventDefinition<"personal-access-token-request-cancelled">
  | WebhookEventDefinition<"personal-access-token-request-created">
  | WebhookEventDefinition<"personal-access-token-request-denied">;
export type PersonalAccessTokenRequestApprovedEvent =
  WebhookEventDefinition<"personal-access-token-request-approved">;
export type PersonalAccessTokenRequestCancelledEvent =
  WebhookEventDefinition<"personal-access-token-request-cancelled">;
export type PersonalAccessTokenRequestCreatedEvent =
  WebhookEventDefinition<"personal-access-token-request-created">;
export type PersonalAccessTokenRequestDeniedEvent =
  WebhookEventDefinition<"personal-access-token-request-denied">;
export type PingEvent = WebhookEventDefinition<"ping">;
export type ProjectCardEvent =
  | WebhookEventDefinition<"project-card-converted">
  | WebhookEventDefinition<"project-card-created">
  | WebhookEventDefinition<"project-card-deleted">
  | WebhookEventDefinition<"project-card-edited">
  | WebhookEventDefinition<"project-card-moved">;
export type ProjectCardConvertedEvent =
  WebhookEventDefinition<"project-card-converted">;
export type ProjectCardCreatedEvent =
  WebhookEventDefinition<"project-card-created">;
export type ProjectCardDeletedEvent =
  WebhookEventDefinition<"project-card-deleted">;
export type ProjectCardEditedEvent =
  WebhookEventDefinition<"project-card-edited">;
export type ProjectCardMovedEvent =
  WebhookEventDefinition<"project-card-moved">;
export type ProjectEvent =
  | WebhookEventDefinition<"project-closed">
  | WebhookEventDefinition<"project-created">
  | WebhookEventDefinition<"project-deleted">
  | WebhookEventDefinition<"project-edited">
  | WebhookEventDefinition<"project-reopened">;
export type ProjectClosedEvent = WebhookEventDefinition<"project-closed">;
export type ProjectColumnEvent =
  | WebhookEventDefinition<"project-column-created">
  | WebhookEventDefinition<"project-column-deleted">
  | WebhookEventDefinition<"project-column-edited">
  | WebhookEventDefinition<"project-column-moved">;
export type ProjectColumnCreatedEvent =
  WebhookEventDefinition<"project-column-created">;
export type ProjectColumnDeletedEvent =
  WebhookEventDefinition<"project-column-deleted">;
export type ProjectColumnEditedEvent =
  WebhookEventDefinition<"project-column-edited">;
export type ProjectColumnMovedEvent =
  WebhookEventDefinition<"project-column-moved">;
export type ProjectCreatedEvent = WebhookEventDefinition<"project-created">;
export type ProjectDeletedEvent = WebhookEventDefinition<"project-deleted">;
export type ProjectEditedEvent = WebhookEventDefinition<"project-edited">;
export type ProjectReopenedEvent = WebhookEventDefinition<"project-reopened">;
export type ProjectsV2Event =
  | WebhookEventDefinition<"projects-v2-closed">
  | WebhookEventDefinition<"projects-v2-created">
  | WebhookEventDefinition<"projects-v2-deleted">
  | WebhookEventDefinition<"projects-v2-edited">
  | WebhookEventDefinition<"projects-v2-reopened">;
export type ProjectsV2ClosedEvent =
  WebhookEventDefinition<"projects-v2-closed">;
export type ProjectsV2CreatedEvent =
  WebhookEventDefinition<"projects-v2-created">;
export type ProjectsV2DeletedEvent =
  WebhookEventDefinition<"projects-v2-deleted">;
export type ProjectsV2EditedEvent =
  WebhookEventDefinition<"projects-v2-edited">;
export type ProjectsV2ItemEvent =
  | WebhookEventDefinition<"projects-v2-item-archived">
  | WebhookEventDefinition<"projects-v2-item-converted">
  | WebhookEventDefinition<"projects-v2-item-created">
  | WebhookEventDefinition<"projects-v2-item-deleted">
  | WebhookEventDefinition<"projects-v2-item-edited">
  | WebhookEventDefinition<"projects-v2-item-reordered">
  | WebhookEventDefinition<"projects-v2-item-restored">;
export type ProjectsV2ItemArchivedEvent =
  WebhookEventDefinition<"projects-v2-item-archived">;
export type ProjectsV2ItemConvertedEvent =
  WebhookEventDefinition<"projects-v2-item-converted">;
export type ProjectsV2ItemCreatedEvent =
  WebhookEventDefinition<"projects-v2-item-created">;
export type ProjectsV2ItemDeletedEvent =
  WebhookEventDefinition<"projects-v2-item-deleted">;
export type ProjectsV2ItemEditedEvent =
  WebhookEventDefinition<"projects-v2-item-edited">;
export type ProjectsV2ItemReorderedEvent =
  WebhookEventDefinition<"projects-v2-item-reordered">;
export type ProjectsV2ItemRestoredEvent =
  WebhookEventDefinition<"projects-v2-item-restored">;
export type ProjectsV2ReopenedEvent =
  WebhookEventDefinition<"projects-v2-reopened">;
export type PublicEvent = WebhookEventDefinition<"public">;
export type PullRequestEvent =
  | WebhookEventDefinition<"pull-request-assigned">
  | WebhookEventDefinition<"pull-request-auto-merge-disabled">
  | WebhookEventDefinition<"pull-request-auto-merge-enabled">
  | WebhookEventDefinition<"pull-request-closed">
  | WebhookEventDefinition<"pull-request-converted-to-draft">
  | WebhookEventDefinition<"pull-request-demilestoned">
  | WebhookEventDefinition<"pull-request-dequeued">
  | WebhookEventDefinition<"pull-request-edited">
  | WebhookEventDefinition<"pull-request-enqueued">
  | WebhookEventDefinition<"pull-request-labeled">
  | WebhookEventDefinition<"pull-request-locked">
  | WebhookEventDefinition<"pull-request-milestoned">
  | WebhookEventDefinition<"pull-request-opened">
  | WebhookEventDefinition<"pull-request-ready-for-review">
  | WebhookEventDefinition<"pull-request-reopened">
  | WebhookEventDefinition<"pull-request-review-request-removed">
  | WebhookEventDefinition<"pull-request-review-requested">
  | WebhookEventDefinition<"pull-request-synchronize">
  | WebhookEventDefinition<"pull-request-unassigned">
  | WebhookEventDefinition<"pull-request-unlabeled">
  | WebhookEventDefinition<"pull-request-unlocked">;
export type PullRequestAssignedEvent =
  WebhookEventDefinition<"pull-request-assigned">;
export type PullRequestAutoMergeDisabledEvent =
  WebhookEventDefinition<"pull-request-auto-merge-disabled">;
export type PullRequestAutoMergeEnabledEvent =
  WebhookEventDefinition<"pull-request-auto-merge-enabled">;
export type PullRequestClosedEvent =
  WebhookEventDefinition<"pull-request-closed">;
export type PullRequestConvertedToDraftEvent =
  WebhookEventDefinition<"pull-request-converted-to-draft">;
export type PullRequestDemilestonedEvent =
  WebhookEventDefinition<"pull-request-demilestoned">;
export type PullRequestDequeuedEvent =
  WebhookEventDefinition<"pull-request-dequeued">;
export type PullRequestEditedEvent =
  WebhookEventDefinition<"pull-request-edited">;
export type PullRequestEnqueuedEvent =
  WebhookEventDefinition<"pull-request-enqueued">;
export type PullRequestLabeledEvent =
  WebhookEventDefinition<"pull-request-labeled">;
export type PullRequestLockedEvent =
  WebhookEventDefinition<"pull-request-locked">;
export type PullRequestMilestonedEvent =
  WebhookEventDefinition<"pull-request-milestoned">;
export type PullRequestOpenedEvent =
  WebhookEventDefinition<"pull-request-opened">;
export type PullRequestReadyForReviewEvent =
  WebhookEventDefinition<"pull-request-ready-for-review">;
export type PullRequestReopenedEvent =
  WebhookEventDefinition<"pull-request-reopened">;
export type PullRequestReviewCommentEvent =
  | WebhookEventDefinition<"pull-request-review-comment-created">
  | WebhookEventDefinition<"pull-request-review-comment-deleted">
  | WebhookEventDefinition<"pull-request-review-comment-edited">;
export type PullRequestReviewCommentCreatedEvent =
  WebhookEventDefinition<"pull-request-review-comment-created">;
export type PullRequestReviewCommentDeletedEvent =
  WebhookEventDefinition<"pull-request-review-comment-deleted">;
export type PullRequestReviewCommentEditedEvent =
  WebhookEventDefinition<"pull-request-review-comment-edited">;
export type PullRequestReviewEvent =
  | WebhookEventDefinition<"pull-request-review-dismissed">
  | WebhookEventDefinition<"pull-request-review-edited">
  | WebhookEventDefinition<"pull-request-review-submitted">;
export type PullRequestReviewDismissedEvent =
  WebhookEventDefinition<"pull-request-review-dismissed">;
export type PullRequestReviewEditedEvent =
  WebhookEventDefinition<"pull-request-review-edited">;
export type PullRequestReviewRequestRemovedEvent =
  WebhookEventDefinition<"pull-request-review-request-removed">;
export type PullRequestReviewRequestedEvent =
  WebhookEventDefinition<"pull-request-review-requested">;
export type PullRequestReviewSubmittedEvent =
  WebhookEventDefinition<"pull-request-review-submitted">;
export type PullRequestReviewThreadEvent =
  | WebhookEventDefinition<"pull-request-review-thread-resolved">
  | WebhookEventDefinition<"pull-request-review-thread-unresolved">;
export type PullRequestReviewThreadResolvedEvent =
  WebhookEventDefinition<"pull-request-review-thread-resolved">;
export type PullRequestReviewThreadUnresolvedEvent =
  WebhookEventDefinition<"pull-request-review-thread-unresolved">;
export type PullRequestSynchronizeEvent =
  WebhookEventDefinition<"pull-request-synchronize">;
export type PullRequestUnassignedEvent =
  WebhookEventDefinition<"pull-request-unassigned">;
export type PullRequestUnlabeledEvent =
  WebhookEventDefinition<"pull-request-unlabeled">;
export type PullRequestUnlockedEvent =
  WebhookEventDefinition<"pull-request-unlocked">;
export type PushEvent = WebhookEventDefinition<"push">;
export type RegistryPackageEvent =
  | WebhookEventDefinition<"registry-package-published">
  | WebhookEventDefinition<"registry-package-updated">;
export type RegistryPackagePublishedEvent =
  WebhookEventDefinition<"registry-package-published">;
export type RegistryPackageUpdatedEvent =
  WebhookEventDefinition<"registry-package-updated">;
export type ReleaseEvent =
  | WebhookEventDefinition<"release-created">
  | WebhookEventDefinition<"release-deleted">
  | WebhookEventDefinition<"release-edited">
  | WebhookEventDefinition<"release-prereleased">
  | WebhookEventDefinition<"release-published">
  | WebhookEventDefinition<"release-released">
  | WebhookEventDefinition<"release-unpublished">;
export type ReleaseCreatedEvent = WebhookEventDefinition<"release-created">;
export type ReleaseDeletedEvent = WebhookEventDefinition<"release-deleted">;
export type ReleaseEditedEvent = WebhookEventDefinition<"release-edited">;
export type ReleasePrereleasedEvent =
  WebhookEventDefinition<"release-prereleased">;
export type ReleasePublishedEvent = WebhookEventDefinition<"release-published">;
export type ReleaseReleasedEvent = WebhookEventDefinition<"release-released">;
export type ReleaseUnpublishedEvent =
  WebhookEventDefinition<"release-unpublished">;
export type RepositoryAdvisoryEvent =
  | WebhookEventDefinition<"repository-advisory-published">
  | WebhookEventDefinition<"repository-advisory-reported">;
export type RepositoryAdvisoryPublishedEvent =
  WebhookEventDefinition<"repository-advisory-published">;
export type RepositoryAdvisoryReportedEvent =
  WebhookEventDefinition<"repository-advisory-reported">;
export type RepositoryEvent =
  | WebhookEventDefinition<"repository-archived">
  | WebhookEventDefinition<"repository-created">
  | WebhookEventDefinition<"repository-deleted">
  | WebhookEventDefinition<"repository-edited">
  | WebhookEventDefinition<"repository-privatized">
  | WebhookEventDefinition<"repository-publicized">
  | WebhookEventDefinition<"repository-renamed">
  | WebhookEventDefinition<"repository-transferred">
  | WebhookEventDefinition<"repository-unarchived">;
export type RepositoryArchivedEvent =
  WebhookEventDefinition<"repository-archived">;
export type RepositoryCreatedEvent =
  WebhookEventDefinition<"repository-created">;
export type RepositoryDeletedEvent =
  WebhookEventDefinition<"repository-deleted">;
export type RepositoryDispatchEvent =
  WebhookEventDefinition<"repository-dispatch-sample.collected">;
export type RepositoryDispatchSampleCollectedEvent =
  WebhookEventDefinition<"repository-dispatch-sample.collected">;
export type RepositoryEditedEvent = WebhookEventDefinition<"repository-edited">;
export type RepositoryImportEvent = WebhookEventDefinition<"repository-import">;
export type RepositoryPrivatizedEvent =
  WebhookEventDefinition<"repository-privatized">;
export type RepositoryPublicizedEvent =
  WebhookEventDefinition<"repository-publicized">;
export type RepositoryRenamedEvent =
  WebhookEventDefinition<"repository-renamed">;
export type RepositoryRulesetEvent =
  | WebhookEventDefinition<"repository-ruleset-created">
  | WebhookEventDefinition<"repository-ruleset-deleted">
  | WebhookEventDefinition<"repository-ruleset-edited">;
export type RepositoryRulesetCreatedEvent =
  WebhookEventDefinition<"repository-ruleset-created">;
export type RepositoryRulesetDeletedEvent =
  WebhookEventDefinition<"repository-ruleset-deleted">;
export type RepositoryRulesetEditedEvent =
  WebhookEventDefinition<"repository-ruleset-edited">;
export type RepositoryTransferredEvent =
  WebhookEventDefinition<"repository-transferred">;
export type RepositoryUnarchivedEvent =
  WebhookEventDefinition<"repository-unarchived">;
export type RepositoryVulnerabilityAlertEvent =
  | WebhookEventDefinition<"repository-vulnerability-alert-create">
  | WebhookEventDefinition<"repository-vulnerability-alert-dismiss">
  | WebhookEventDefinition<"repository-vulnerability-alert-reopen">
  | WebhookEventDefinition<"repository-vulnerability-alert-resolve">;
export type RepositoryVulnerabilityAlertCreateEvent =
  WebhookEventDefinition<"repository-vulnerability-alert-create">;
export type RepositoryVulnerabilityAlertDismissEvent =
  WebhookEventDefinition<"repository-vulnerability-alert-dismiss">;
export type RepositoryVulnerabilityAlertReopenEvent =
  WebhookEventDefinition<"repository-vulnerability-alert-reopen">;
export type RepositoryVulnerabilityAlertResolveEvent =
  WebhookEventDefinition<"repository-vulnerability-alert-resolve">;
export type SecretScanningAlertEvent =
  | WebhookEventDefinition<"secret-scanning-alert-created">
  | WebhookEventDefinition<"secret-scanning-alert-reopened">
  | WebhookEventDefinition<"secret-scanning-alert-resolved">
  | WebhookEventDefinition<"secret-scanning-alert-revoked">
  | WebhookEventDefinition<"secret-scanning-alert-validated">;
export type SecretScanningAlertCreatedEvent =
  WebhookEventDefinition<"secret-scanning-alert-created">;
export type SecretScanningAlertLocationEvent =
  WebhookEventDefinition<"secret-scanning-alert-location-created">;
export type SecretScanningAlertLocationCreatedEvent =
  WebhookEventDefinition<"secret-scanning-alert-location-created">;
export type SecretScanningAlertReopenedEvent =
  WebhookEventDefinition<"secret-scanning-alert-reopened">;
export type SecretScanningAlertResolvedEvent =
  WebhookEventDefinition<"secret-scanning-alert-resolved">;
export type SecretScanningAlertRevokedEvent =
  WebhookEventDefinition<"secret-scanning-alert-revoked">;
export type SecretScanningAlertValidatedEvent =
  WebhookEventDefinition<"secret-scanning-alert-validated">;
export type SecurityAdvisoryEvent =
  | WebhookEventDefinition<"security-advisory-published">
  | WebhookEventDefinition<"security-advisory-updated">
  | WebhookEventDefinition<"security-advisory-withdrawn">;
export type SecurityAdvisoryPublishedEvent =
  WebhookEventDefinition<"security-advisory-published">;
export type SecurityAdvisoryUpdatedEvent =
  WebhookEventDefinition<"security-advisory-updated">;
export type SecurityAdvisoryWithdrawnEvent =
  WebhookEventDefinition<"security-advisory-withdrawn">;
export type SecurityAndAnalysisEvent =
  WebhookEventDefinition<"security-and-analysis">;
export type SponsorshipEvent =
  | WebhookEventDefinition<"sponsorship-cancelled">
  | WebhookEventDefinition<"sponsorship-created">
  | WebhookEventDefinition<"sponsorship-edited">
  | WebhookEventDefinition<"sponsorship-pending-cancellation">
  | WebhookEventDefinition<"sponsorship-pending-tier-change">
  | WebhookEventDefinition<"sponsorship-tier-changed">;
export type SponsorshipCancelledEvent =
  WebhookEventDefinition<"sponsorship-cancelled">;
export type SponsorshipCreatedEvent =
  WebhookEventDefinition<"sponsorship-created">;
export type SponsorshipEditedEvent =
  WebhookEventDefinition<"sponsorship-edited">;
export type SponsorshipPendingCancellationEvent =
  WebhookEventDefinition<"sponsorship-pending-cancellation">;
export type SponsorshipPendingTierChangeEvent =
  WebhookEventDefinition<"sponsorship-pending-tier-change">;
export type SponsorshipTierChangedEvent =
  WebhookEventDefinition<"sponsorship-tier-changed">;
export type StarEvent =
  | WebhookEventDefinition<"star-created">
  | WebhookEventDefinition<"star-deleted">;
export type StarCreatedEvent = WebhookEventDefinition<"star-created">;
export type StarDeletedEvent = WebhookEventDefinition<"star-deleted">;
export type StatusEvent = WebhookEventDefinition<"status">;
export type TeamAddEvent = WebhookEventDefinition<"team-add">;
export type TeamEvent =
  | WebhookEventDefinition<"team-added-to-repository">
  | WebhookEventDefinition<"team-created">
  | WebhookEventDefinition<"team-deleted">
  | WebhookEventDefinition<"team-edited">
  | WebhookEventDefinition<"team-removed-from-repository">;
export type TeamAddedToRepositoryEvent =
  WebhookEventDefinition<"team-added-to-repository">;
export type TeamCreatedEvent = WebhookEventDefinition<"team-created">;
export type TeamDeletedEvent = WebhookEventDefinition<"team-deleted">;
export type TeamEditedEvent = WebhookEventDefinition<"team-edited">;
export type TeamRemovedFromRepositoryEvent =
  WebhookEventDefinition<"team-removed-from-repository">;
export type WatchEvent = WebhookEventDefinition<"watch-started">;
export type WatchStartedEvent = WebhookEventDefinition<"watch-started">;
export type WorkflowDispatchEvent = WebhookEventDefinition<"workflow-dispatch">;
export type WorkflowJobEvent =
  | WebhookEventDefinition<"workflow-job-completed">
  | WebhookEventDefinition<"workflow-job-in-progress">
  | WebhookEventDefinition<"workflow-job-queued">
  | WebhookEventDefinition<"workflow-job-waiting">;
export type WorkflowJobCompletedEvent =
  WebhookEventDefinition<"workflow-job-completed">;
export type WorkflowJobInProgressEvent =
  WebhookEventDefinition<"workflow-job-in-progress">;
export type WorkflowJobQueuedEvent =
  WebhookEventDefinition<"workflow-job-queued">;
export type WorkflowJobWaitingEvent =
  WebhookEventDefinition<"workflow-job-waiting">;
export type WorkflowRunEvent =
  | WebhookEventDefinition<"workflow-run-completed">
  | WebhookEventDefinition<"workflow-run-in-progress">
  | WebhookEventDefinition<"workflow-run-requested">;
export type WorkflowRunCompletedEvent =
  WebhookEventDefinition<"workflow-run-completed">;
export type WorkflowRunInProgressEvent =
  WebhookEventDefinition<"workflow-run-in-progress">;
export type WorkflowRunRequestedEvent =
  WebhookEventDefinition<"workflow-run-requested">;

export type Schema =
  | BranchProtectionConfigurationEvent
  | BranchProtectionConfigurationDisabledEvent
  | BranchProtectionConfigurationEnabledEvent
  | BranchProtectionRuleEvent
  | BranchProtectionRuleCreatedEvent
  | BranchProtectionRuleDeletedEvent
  | BranchProtectionRuleEditedEvent
  | CheckRunEvent
  | CheckRunCompletedEvent
  | CheckRunCreatedEvent
  | CheckRunRequestedActionEvent
  | CheckRunRerequestedEvent
  | CheckSuiteEvent
  | CheckSuiteCompletedEvent
  | CheckSuiteRequestedEvent
  | CheckSuiteRerequestedEvent
  | CodeScanningAlertEvent
  | CodeScanningAlertAppearedInBranchEvent
  | CodeScanningAlertClosedByUserEvent
  | CodeScanningAlertCreatedEvent
  | CodeScanningAlertFixedEvent
  | CodeScanningAlertReopenedEvent
  | CodeScanningAlertReopenedByUserEvent
  | CommitCommentEvent
  | CommitCommentCreatedEvent
  | CreateEvent
  | CustomPropertyEvent
  | CustomPropertyCreatedEvent
  | CustomPropertyDeletedEvent
  | CustomPropertyUpdatedEvent
  | CustomPropertyValuesEvent
  | CustomPropertyValuesUpdatedEvent
  | DeleteEvent
  | DependabotAlertEvent
  | DependabotAlertAutoDismissedEvent
  | DependabotAlertAutoReopenedEvent
  | DependabotAlertCreatedEvent
  | DependabotAlertDismissedEvent
  | DependabotAlertFixedEvent
  | DependabotAlertReintroducedEvent
  | DependabotAlertReopenedEvent
  | DeployKeyEvent
  | DeployKeyCreatedEvent
  | DeployKeyDeletedEvent
  | DeploymentEvent
  | DeploymentCreatedEvent
  | DeploymentProtectionRuleEvent
  | DeploymentProtectionRuleRequestedEvent
  | DeploymentReviewEvent
  | DeploymentReviewApprovedEvent
  | DeploymentReviewRejectedEvent
  | DeploymentReviewRequestedEvent
  | DeploymentStatusEvent
  | DeploymentStatusCreatedEvent
  | DiscussionEvent
  | DiscussionAnsweredEvent
  | DiscussionCategoryChangedEvent
  | DiscussionClosedEvent
  | DiscussionCommentEvent
  | DiscussionCommentCreatedEvent
  | DiscussionCommentDeletedEvent
  | DiscussionCommentEditedEvent
  | DiscussionCreatedEvent
  | DiscussionDeletedEvent
  | DiscussionEditedEvent
  | DiscussionLabeledEvent
  | DiscussionLockedEvent
  | DiscussionPinnedEvent
  | DiscussionReopenedEvent
  | DiscussionTransferredEvent
  | DiscussionUnansweredEvent
  | DiscussionUnlabeledEvent
  | DiscussionUnlockedEvent
  | DiscussionUnpinnedEvent
  | ForkEvent
  | GithubAppAuthorizationEvent
  | GithubAppAuthorizationRevokedEvent
  | GollumEvent
  | InstallationEvent
  | InstallationCreatedEvent
  | InstallationDeletedEvent
  | InstallationNewPermissionsAcceptedEvent
  | InstallationRepositoriesEvent
  | InstallationRepositoriesAddedEvent
  | InstallationRepositoriesRemovedEvent
  | InstallationSuspendEvent
  | InstallationTargetEvent
  | InstallationTargetRenamedEvent
  | InstallationUnsuspendEvent
  | IssueCommentEvent
  | IssueCommentCreatedEvent
  | IssueCommentDeletedEvent
  | IssueCommentEditedEvent
  | IssuesEvent
  | IssuesAssignedEvent
  | IssuesClosedEvent
  | IssuesDeletedEvent
  | IssuesDemilestonedEvent
  | IssuesEditedEvent
  | IssuesLabeledEvent
  | IssuesLockedEvent
  | IssuesMilestonedEvent
  | IssuesOpenedEvent
  | IssuesPinnedEvent
  | IssuesReopenedEvent
  | IssuesTransferredEvent
  | IssuesUnassignedEvent
  | IssuesUnlabeledEvent
  | IssuesUnlockedEvent
  | IssuesUnpinnedEvent
  | LabelEvent
  | LabelCreatedEvent
  | LabelDeletedEvent
  | LabelEditedEvent
  | MarketplacePurchaseEvent
  | MarketplacePurchaseCancelledEvent
  | MarketplacePurchaseChangedEvent
  | MarketplacePurchasePendingChangeEvent
  | MarketplacePurchasePendingChangeCancelledEvent
  | MarketplacePurchasePurchasedEvent
  | MemberEvent
  | MemberAddedEvent
  | MemberEditedEvent
  | MemberRemovedEvent
  | MembershipEvent
  | MembershipAddedEvent
  | MembershipRemovedEvent
  | MergeGroupEvent
  | MergeGroupChecksRequestedEvent
  | MergeGroupDestroyedEvent
  | MetaEvent
  | MetaDeletedEvent
  | MilestoneEvent
  | MilestoneClosedEvent
  | MilestoneCreatedEvent
  | MilestoneDeletedEvent
  | MilestoneEditedEvent
  | MilestoneOpenedEvent
  | OrgBlockEvent
  | OrgBlockBlockedEvent
  | OrgBlockUnblockedEvent
  | OrganizationEvent
  | OrganizationDeletedEvent
  | OrganizationMemberAddedEvent
  | OrganizationMemberInvitedEvent
  | OrganizationMemberRemovedEvent
  | OrganizationRenamedEvent
  | PackageEvent
  | PackagePublishedEvent
  | PackageUpdatedEvent
  | PageBuildEvent
  | PersonalAccessTokenRequestEvent
  | PersonalAccessTokenRequestApprovedEvent
  | PersonalAccessTokenRequestCancelledEvent
  | PersonalAccessTokenRequestCreatedEvent
  | PersonalAccessTokenRequestDeniedEvent
  | PingEvent
  | ProjectCardEvent
  | ProjectCardConvertedEvent
  | ProjectCardCreatedEvent
  | ProjectCardDeletedEvent
  | ProjectCardEditedEvent
  | ProjectCardMovedEvent
  | ProjectEvent
  | ProjectClosedEvent
  | ProjectColumnEvent
  | ProjectColumnCreatedEvent
  | ProjectColumnDeletedEvent
  | ProjectColumnEditedEvent
  | ProjectColumnMovedEvent
  | ProjectCreatedEvent
  | ProjectDeletedEvent
  | ProjectEditedEvent
  | ProjectReopenedEvent
  | ProjectsV2Event
  | ProjectsV2ClosedEvent
  | ProjectsV2CreatedEvent
  | ProjectsV2DeletedEvent
  | ProjectsV2EditedEvent
  | ProjectsV2ItemEvent
  | ProjectsV2ItemArchivedEvent
  | ProjectsV2ItemConvertedEvent
  | ProjectsV2ItemCreatedEvent
  | ProjectsV2ItemDeletedEvent
  | ProjectsV2ItemEditedEvent
  | ProjectsV2ItemReorderedEvent
  | ProjectsV2ItemRestoredEvent
  | ProjectsV2ReopenedEvent
  | PublicEvent
  | PullRequestEvent
  | PullRequestAssignedEvent
  | PullRequestAutoMergeDisabledEvent
  | PullRequestAutoMergeEnabledEvent
  | PullRequestClosedEvent
  | PullRequestConvertedToDraftEvent
  | PullRequestDemilestonedEvent
  | PullRequestDequeuedEvent
  | PullRequestEditedEvent
  | PullRequestEnqueuedEvent
  | PullRequestLabeledEvent
  | PullRequestLockedEvent
  | PullRequestMilestonedEvent
  | PullRequestOpenedEvent
  | PullRequestReadyForReviewEvent
  | PullRequestReopenedEvent
  | PullRequestReviewCommentEvent
  | PullRequestReviewCommentCreatedEvent
  | PullRequestReviewCommentDeletedEvent
  | PullRequestReviewCommentEditedEvent
  | PullRequestReviewEvent
  | PullRequestReviewDismissedEvent
  | PullRequestReviewEditedEvent
  | PullRequestReviewRequestRemovedEvent
  | PullRequestReviewRequestedEvent
  | PullRequestReviewSubmittedEvent
  | PullRequestReviewThreadEvent
  | PullRequestReviewThreadResolvedEvent
  | PullRequestReviewThreadUnresolvedEvent
  | PullRequestSynchronizeEvent
  | PullRequestUnassignedEvent
  | PullRequestUnlabeledEvent
  | PullRequestUnlockedEvent
  | PushEvent
  | RegistryPackageEvent
  | RegistryPackagePublishedEvent
  | RegistryPackageUpdatedEvent
  | ReleaseEvent
  | ReleaseCreatedEvent
  | ReleaseDeletedEvent
  | ReleaseEditedEvent
  | ReleasePrereleasedEvent
  | ReleasePublishedEvent
  | ReleaseReleasedEvent
  | ReleaseUnpublishedEvent
  | RepositoryAdvisoryEvent
  | RepositoryAdvisoryPublishedEvent
  | RepositoryAdvisoryReportedEvent
  | RepositoryEvent
  | RepositoryArchivedEvent
  | RepositoryCreatedEvent
  | RepositoryDeletedEvent
  | RepositoryDispatchEvent
  | RepositoryDispatchSampleCollectedEvent
  | RepositoryEditedEvent
  | RepositoryImportEvent
  | RepositoryPrivatizedEvent
  | RepositoryPublicizedEvent
  | RepositoryRenamedEvent
  | RepositoryRulesetEvent
  | RepositoryRulesetCreatedEvent
  | RepositoryRulesetDeletedEvent
  | RepositoryRulesetEditedEvent
  | RepositoryTransferredEvent
  | RepositoryUnarchivedEvent
  | RepositoryVulnerabilityAlertEvent
  | RepositoryVulnerabilityAlertCreateEvent
  | RepositoryVulnerabilityAlertDismissEvent
  | RepositoryVulnerabilityAlertReopenEvent
  | RepositoryVulnerabilityAlertResolveEvent
  | SecretScanningAlertEvent
  | SecretScanningAlertCreatedEvent
  | SecretScanningAlertLocationEvent
  | SecretScanningAlertLocationCreatedEvent
  | SecretScanningAlertReopenedEvent
  | SecretScanningAlertResolvedEvent
  | SecretScanningAlertRevokedEvent
  | SecretScanningAlertValidatedEvent
  | SecurityAdvisoryEvent
  | SecurityAdvisoryPublishedEvent
  | SecurityAdvisoryUpdatedEvent
  | SecurityAdvisoryWithdrawnEvent
  | SecurityAndAnalysisEvent
  | SponsorshipEvent
  | SponsorshipCancelledEvent
  | SponsorshipCreatedEvent
  | SponsorshipEditedEvent
  | SponsorshipPendingCancellationEvent
  | SponsorshipPendingTierChangeEvent
  | SponsorshipTierChangedEvent
  | StarEvent
  | StarCreatedEvent
  | StarDeletedEvent
  | StatusEvent
  | TeamAddEvent
  | TeamEvent
  | TeamAddedToRepositoryEvent
  | TeamCreatedEvent
  | TeamDeletedEvent
  | TeamEditedEvent
  | TeamRemovedFromRepositoryEvent
  | WatchEvent
  | WatchStartedEvent
  | WorkflowDispatchEvent
  | WorkflowJobEvent
  | WorkflowJobCompletedEvent
  | WorkflowJobInProgressEvent
  | WorkflowJobQueuedEvent
  | WorkflowJobWaitingEvent
  | WorkflowRunEvent
  | WorkflowRunCompletedEvent
  | WorkflowRunInProgressEvent
  | WorkflowRunRequestedEvent;

export type EventPayloadMap = {
  branch_protection_configuration:
    | BranchProtectionConfigurationDisabledEvent
    | BranchProtectionConfigurationEnabledEvent;
  branch_protection_rule:
    | BranchProtectionRuleCreatedEvent
    | BranchProtectionRuleDeletedEvent
    | BranchProtectionRuleEditedEvent;
  check_run:
    | CheckRunCompletedEvent
    | CheckRunCreatedEvent
    | CheckRunRequestedActionEvent
    | CheckRunRerequestedEvent;
  check_suite:
    | CheckSuiteCompletedEvent
    | CheckSuiteRequestedEvent
    | CheckSuiteRerequestedEvent;
  code_scanning_alert:
    | CodeScanningAlertAppearedInBranchEvent
    | CodeScanningAlertClosedByUserEvent
    | CodeScanningAlertCreatedEvent
    | CodeScanningAlertFixedEvent
    | CodeScanningAlertReopenedEvent
    | CodeScanningAlertReopenedByUserEvent;
  commit_comment: CommitCommentCreatedEvent;
  create: CreateEvent;
  custom_property:
    | CustomPropertyCreatedEvent
    | CustomPropertyDeletedEvent
    | CustomPropertyUpdatedEvent;
  custom_property_values: CustomPropertyValuesUpdatedEvent;
  delete: DeleteEvent;
  dependabot_alert:
    | DependabotAlertAutoDismissedEvent
    | DependabotAlertAutoReopenedEvent
    | DependabotAlertCreatedEvent
    | DependabotAlertDismissedEvent
    | DependabotAlertFixedEvent
    | DependabotAlertReintroducedEvent
    | DependabotAlertReopenedEvent;
  deploy_key: DeployKeyCreatedEvent | DeployKeyDeletedEvent;
  deployment: DeploymentCreatedEvent;
  deployment_protection_rule: DeploymentProtectionRuleRequestedEvent;
  deployment_review:
    | DeploymentReviewApprovedEvent
    | DeploymentReviewRejectedEvent
    | DeploymentReviewRequestedEvent;
  deployment_status: DeploymentStatusCreatedEvent;
  discussion:
    | DiscussionAnsweredEvent
    | DiscussionCategoryChangedEvent
    | DiscussionClosedEvent
    | DiscussionCreatedEvent
    | DiscussionDeletedEvent
    | DiscussionEditedEvent
    | DiscussionLabeledEvent
    | DiscussionLockedEvent
    | DiscussionPinnedEvent
    | DiscussionReopenedEvent
    | DiscussionTransferredEvent
    | DiscussionUnansweredEvent
    | DiscussionUnlabeledEvent
    | DiscussionUnlockedEvent
    | DiscussionUnpinnedEvent;
  discussion_comment:
    | DiscussionCommentCreatedEvent
    | DiscussionCommentDeletedEvent
    | DiscussionCommentEditedEvent;
  fork: ForkEvent;
  github_app_authorization: GithubAppAuthorizationRevokedEvent;
  gollum: GollumEvent;
  installation:
    | InstallationCreatedEvent
    | InstallationDeletedEvent
    | InstallationNewPermissionsAcceptedEvent
    | InstallationSuspendEvent
    | InstallationUnsuspendEvent;
  installation_repositories:
    | InstallationRepositoriesAddedEvent
    | InstallationRepositoriesRemovedEvent;
  installation_target: InstallationTargetRenamedEvent;
  issue_comment:
    | IssueCommentCreatedEvent
    | IssueCommentDeletedEvent
    | IssueCommentEditedEvent;
  issues:
    | IssuesAssignedEvent
    | IssuesClosedEvent
    | IssuesDeletedEvent
    | IssuesDemilestonedEvent
    | IssuesEditedEvent
    | IssuesLabeledEvent
    | IssuesLockedEvent
    | IssuesMilestonedEvent
    | IssuesOpenedEvent
    | IssuesPinnedEvent
    | IssuesReopenedEvent
    | IssuesTransferredEvent
    | IssuesUnassignedEvent
    | IssuesUnlabeledEvent
    | IssuesUnlockedEvent
    | IssuesUnpinnedEvent;
  label: LabelCreatedEvent | LabelDeletedEvent | LabelEditedEvent;
  marketplace_purchase:
    | MarketplacePurchaseCancelledEvent
    | MarketplacePurchaseChangedEvent
    | MarketplacePurchasePendingChangeEvent
    | MarketplacePurchasePendingChangeCancelledEvent
    | MarketplacePurchasePurchasedEvent;
  member: MemberAddedEvent | MemberEditedEvent | MemberRemovedEvent;
  membership: MembershipAddedEvent | MembershipRemovedEvent;
  merge_group: MergeGroupChecksRequestedEvent | MergeGroupDestroyedEvent;
  meta: MetaDeletedEvent;
  milestone:
    | MilestoneClosedEvent
    | MilestoneCreatedEvent
    | MilestoneDeletedEvent
    | MilestoneEditedEvent
    | MilestoneOpenedEvent;
  org_block: OrgBlockBlockedEvent | OrgBlockUnblockedEvent;
  organization:
    | OrganizationDeletedEvent
    | OrganizationMemberAddedEvent
    | OrganizationMemberInvitedEvent
    | OrganizationMemberRemovedEvent
    | OrganizationRenamedEvent;
  package: PackagePublishedEvent | PackageUpdatedEvent;
  page_build: PageBuildEvent;
  personal_access_token_request:
    | PersonalAccessTokenRequestApprovedEvent
    | PersonalAccessTokenRequestCancelledEvent
    | PersonalAccessTokenRequestCreatedEvent
    | PersonalAccessTokenRequestDeniedEvent;
  ping: PingEvent;
  project_card:
    | ProjectCardConvertedEvent
    | ProjectCardCreatedEvent
    | ProjectCardDeletedEvent
    | ProjectCardEditedEvent
    | ProjectCardMovedEvent;
  project:
    | ProjectClosedEvent
    | ProjectCreatedEvent
    | ProjectDeletedEvent
    | ProjectEditedEvent
    | ProjectReopenedEvent;
  project_column:
    | ProjectColumnCreatedEvent
    | ProjectColumnDeletedEvent
    | ProjectColumnEditedEvent
    | ProjectColumnMovedEvent;
  projects_v2:
    | ProjectsV2ClosedEvent
    | ProjectsV2CreatedEvent
    | ProjectsV2DeletedEvent
    | ProjectsV2EditedEvent
    | ProjectsV2ReopenedEvent;
  projects_v2_item:
    | ProjectsV2ItemArchivedEvent
    | ProjectsV2ItemConvertedEvent
    | ProjectsV2ItemCreatedEvent
    | ProjectsV2ItemDeletedEvent
    | ProjectsV2ItemEditedEvent
    | ProjectsV2ItemReorderedEvent
    | ProjectsV2ItemRestoredEvent;
  public: PublicEvent;
  pull_request:
    | PullRequestAssignedEvent
    | PullRequestAutoMergeDisabledEvent
    | PullRequestAutoMergeEnabledEvent
    | PullRequestClosedEvent
    | PullRequestConvertedToDraftEvent
    | PullRequestDemilestonedEvent
    | PullRequestDequeuedEvent
    | PullRequestEditedEvent
    | PullRequestEnqueuedEvent
    | PullRequestLabeledEvent
    | PullRequestLockedEvent
    | PullRequestMilestonedEvent
    | PullRequestOpenedEvent
    | PullRequestReadyForReviewEvent
    | PullRequestReopenedEvent
    | PullRequestReviewRequestRemovedEvent
    | PullRequestReviewRequestedEvent
    | PullRequestSynchronizeEvent
    | PullRequestUnassignedEvent
    | PullRequestUnlabeledEvent
    | PullRequestUnlockedEvent;
  pull_request_review_comment:
    | PullRequestReviewCommentCreatedEvent
    | PullRequestReviewCommentDeletedEvent
    | PullRequestReviewCommentEditedEvent;
  pull_request_review:
    | PullRequestReviewDismissedEvent
    | PullRequestReviewEditedEvent
    | PullRequestReviewSubmittedEvent;
  pull_request_review_thread:
    | PullRequestReviewThreadResolvedEvent
    | PullRequestReviewThreadUnresolvedEvent;
  push: PushEvent;
  registry_package: RegistryPackagePublishedEvent | RegistryPackageUpdatedEvent;
  release:
    | ReleaseCreatedEvent
    | ReleaseDeletedEvent
    | ReleaseEditedEvent
    | ReleasePrereleasedEvent
    | ReleasePublishedEvent
    | ReleaseReleasedEvent
    | ReleaseUnpublishedEvent;
  repository_advisory:
    | RepositoryAdvisoryPublishedEvent
    | RepositoryAdvisoryReportedEvent;
  repository:
    | RepositoryArchivedEvent
    | RepositoryCreatedEvent
    | RepositoryDeletedEvent
    | RepositoryEditedEvent
    | RepositoryPrivatizedEvent
    | RepositoryPublicizedEvent
    | RepositoryRenamedEvent
    | RepositoryTransferredEvent
    | RepositoryUnarchivedEvent;
  repository_dispatch: RepositoryDispatchSampleCollectedEvent;
  repository_import: RepositoryImportEvent;
  repository_ruleset:
    | RepositoryRulesetCreatedEvent
    | RepositoryRulesetDeletedEvent
    | RepositoryRulesetEditedEvent;
  repository_vulnerability_alert:
    | RepositoryVulnerabilityAlertCreateEvent
    | RepositoryVulnerabilityAlertDismissEvent
    | RepositoryVulnerabilityAlertReopenEvent
    | RepositoryVulnerabilityAlertResolveEvent;
  secret_scanning_alert:
    | SecretScanningAlertCreatedEvent
    | SecretScanningAlertReopenedEvent
    | SecretScanningAlertResolvedEvent
    | SecretScanningAlertRevokedEvent
    | SecretScanningAlertValidatedEvent;
  secret_scanning_alert_location: SecretScanningAlertLocationCreatedEvent;
  security_advisory:
    | SecurityAdvisoryPublishedEvent
    | SecurityAdvisoryUpdatedEvent
    | SecurityAdvisoryWithdrawnEvent;
  security_and_analysis: SecurityAndAnalysisEvent;
  sponsorship:
    | SponsorshipCancelledEvent
    | SponsorshipCreatedEvent
    | SponsorshipEditedEvent
    | SponsorshipPendingCancellationEvent
    | SponsorshipPendingTierChangeEvent
    | SponsorshipTierChangedEvent;
  star: StarCreatedEvent | StarDeletedEvent;
  status: StatusEvent;
  team_add: TeamAddEvent;
  team:
    | TeamAddedToRepositoryEvent
    | TeamCreatedEvent
    | TeamDeletedEvent
    | TeamEditedEvent
    | TeamRemovedFromRepositoryEvent;
  watch: WatchStartedEvent;
  workflow_dispatch: WorkflowDispatchEvent;
  workflow_job:
    | WorkflowJobCompletedEvent
    | WorkflowJobInProgressEvent
    | WorkflowJobQueuedEvent
    | WorkflowJobWaitingEvent;
  workflow_run:
    | WorkflowRunCompletedEvent
    | WorkflowRunInProgressEvent
    | WorkflowRunRequestedEvent;
};
export type WebhookEvent = Schema;
export type WebhookEventMap = EventPayloadMap;
export type WebhookEventName = keyof EventPayloadMap;
