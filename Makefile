prod:
	@echo "Switching to main branch and pulling latest changes..."
	git checkout main
	git pull origin main
	@echo "Installing dependencies..."
	npm install
	@echo "Building the project..."
	npm run build
	@echo "Checking if PM2 lefilanthrope prod service exists..."
	@if pm2 describe lefilanthrope-front-prod > /dev/null; then \
		echo "Stopping PM2 service..."; \
		pm2 delete lefilanthrope-front-prod; \
	else \
		echo "PM2 service not found, skipping delete step."; \
	fi
	@echo "Starting PM2 service..."
	pm2 start ecosystem.config.cjs --only lefilanthrope-front-prod
	@echo "Deployment complete."

preprod:
	@echo "Installing dependencies..."
	npm install
	@echo "Building the project..."
	npm run build
	@echo "Checking if PM2 lefilanthrope preprod service exists..."
	@if pm2 describe lefilanthrope-front-preprod > /dev/null; then \
		echo "Stopping PM2 service..."; \
		pm2 delete lefilanthrope-front-preprod; \
	else \
		echo "PM2 service not found, skipping delete step."; \
	fi
	@echo "Starting PM2 service..."
	pm2 start ecosystem.config.cjs --only lefilanthrope-front-preprod
	@echo "Deployment complete."
