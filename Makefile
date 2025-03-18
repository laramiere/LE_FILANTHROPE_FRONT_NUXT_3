prod:
	@echo "Switching to main branch and pulling latest changes..."
	git checkout main
	git pull origin main
	@echo "Building the project..."
	npm run build
	@echo "Stopping PM2 service..."
	pm2 delete lefilanthrope-front-prod
	@echo "Starting PM2 service..."
	pm2 start ecosystem.config.cjs --only lefilanthrope-front-prod
	@echo "Deployment complete."
preprod:
	@echo "Switching to main branch and pulling latest changes..."
	git checkout main
	git pull origin main
	@echo "Building the project..."
	npm run build
	@echo "Stopping PM2 service..."
	pm2 delete lefilanthrope-front-preprod
	@echo "Starting PM2 service..."
	pm2 start ecosystem.config.cjs --only lefilanthrope-front-preprod
	@echo "Deployment complete."
