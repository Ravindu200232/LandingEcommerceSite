# Deployment Readiness Report

            - Project: `landingecommercesite`
            - Primary service: `app`
            - Detected root: `app`
            - Framework: Next.js `15.4.3`
            - Target: AWS ECS Fargate behind an Application Load Balancer
            - Database: MongoDB Atlas URI injected from AWS Secrets Manager
            - Readiness: **80/100** (review phase)
            - Required environment variables: BETTER_AUTH_URL, MONGODB_URI

            ## Risks

            - Using Next.js 15.4.3 with Better Auth may require specific Node.js version compatibility (>=18.17) not explicitly enforced in deployment
- Hardcoded health check path '/api/health' assumes route exists; missing implementation could cause ALB health check failures
- Environment variables BETTER_AUTH_URL and MONGODB_URI are marked as required but no validation exists at startup
- No explicit .dockerignore file referenced; risk of including sensitive files (e.g., .env) in Docker image
- MongoDB Atlas connection via Secrets Manager requires IAM role permissions not validated in current spec
- GitHub OIDC integration assumes proper trust policy configuration; misconfiguration could block ECR access
- Next.js build output may include development-only dependencies if npm ci is run without --production flag in CI
- ALB listener rules not defined; risk of misrouting traffic to incorrect target groups
- CloudWatch log retention not specified; risk of indefinite log storage and cost overruns
- Secrets Manager secret rotation not configured; long-term exposure risk for MongoDB credentials
- The public ALB allows HTTP from the internet; ECS tasks remain ALB-only.

            ## Recommendations

            - Add Node.js version constraint (e.g., 'engines': { 'node': '>=18.17' }) to package.json to enforce runtime compatibility
- Implement a lightweight /api/health route returning 200 OK if not already present to ensure ALB health checks pass
- Add startup validation in server.js or equivalent to exit with error if BETTER_AUTH_URL or MONGODB_URI are missing
- Create .dockerignore file to exclude .env, .git, node_modules/, and npm-debug.log from Docker build context
- Define least-privilege IAM task role for ECS Fargate to access only required Secrets Manager secrets and CloudWatch Logs
- Verify GitHub OIDC provider trust policy allows assume-role from GitHub Actions for the specific repository and branch
- Modify build step in CI to run 'npm ci --production' before 'npm run build' to exclude devDependencies from image
- Configure ALB with path-based routing: /* to app service, ensure target group health check matches /api/health
- Set CloudWatch log group retention to 30 days via CloudFormation to control costs and meet compliance
- Enable automatic rotation for MongoDB Atlas credentials in Secrets Manager with Lambda rotation function
- Use AWS CloudFormation Parameters for cluster, service, and task definition names to allow reuse across environments
- Add timeout and retry configuration to MongoDB client in lib/db.js for resilience against transient network issues
- Store MONGODB_URI only in AWS Secrets Manager and inject it at runtime.
- Use same-origin Better Auth client configuration behind the ALB.

            ## Security invariants

            - No AWS access keys are written to GitHub.
            - GitHub Actions uses an OIDC role scoped to this repository and default branch.
            - Runtime secret values are never included in this report or generated artifacts.
            - ECS task ingress is allowed from the ALB security group only.
