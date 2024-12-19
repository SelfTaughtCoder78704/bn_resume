import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Server, Database, Globe, ArrowRight, CheckCircle2, 
  Loader2, Files, Settings, Cloud, Archive
} from 'lucide-react';

const MigrationStep = ({ icon: Icon, title, description, status, progress }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'complete':
        return 'text-green-500 dark:text-green-400';
      case 'in-progress':
        return 'text-blue-500 dark:text-blue-400 animate-pulse';
      default:
        return 'text-gray-400 dark:text-gray-600';
    }
  };

  return (
    <div className="flex items-start gap-4">
      <div className={`mt-1 ${getStatusStyles()}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        {progress !== undefined && (
          <div className="mt-2">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 dark:bg-blue-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {progress}% complete
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const WordPressMigrationDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState({});
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    {
      icon: Files,
      title: 'Backup Current Site',
      description: 'Creating complete backup of files and database'
    },
    {
      icon: Database,
      title: 'Export Database',
      description: 'Exporting MySQL database with optimized settings'
    },
    {
      icon: Archive,
      title: 'Compress Assets',
      description: 'Optimizing and compressing media files'
    },
    {
      icon: Cloud,
      title: 'Transfer Files',
      description: 'Securely transferring files to new server'
    },
    {
      icon: Database,
      title: 'Import Database',
      description: 'Importing and configuring database on new server'
    },
    {
      icon: Settings,
      title: 'Update Configuration',
      description: 'Updating WordPress configuration and permalinks'
    },
    {
      icon: Globe,
      title: 'DNS Propagation',
      description: 'Updating DNS records and verifying propagation'
    }
  ];

  const runMigration = () => {
    setIsRunning(true);
    setCurrentStep(0);
    setProgress({});
  };

  useEffect(() => {
    if (!isRunning) return;

    let stepProgress = 0;
    const progressInterval = setInterval(() => {
      stepProgress += 2;
      setProgress(prev => ({
        ...prev,
        [currentStep]: Math.min(stepProgress, 100)
      }));

      if (stepProgress >= 100) {
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
          stepProgress = 0;
        } else {
          setIsRunning(false);
          clearInterval(progressInterval);
        }
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, [currentStep, isRunning, steps.length]);

  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 dark:text-white">
          <Server className="h-6 w-6 relative" />WordPress Migration Process
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isRunning ? 'Migration in progress...' : 'Ready to start migration'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {isRunning ? `Step ${currentStep + 1} of ${steps.length}` : 'All systems ready'}
              </p>
            </div>
            <button
              onClick={runMigration}
              disabled={isRunning}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isRunning ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Migrating...
                </>
              ) : (
                <>
                  <ArrowRight className="h-4 w-4" />
                  Start Migration
                </>
              )}
            </button>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <MigrationStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                status={
                  index < currentStep ? 'complete' :
                  index === currentStep && isRunning ? 'in-progress' :
                  'pending'
                }
                progress={index === currentStep ? progress[currentStep] : undefined}
              />
            ))}
          </div>

          <div className="border-t dark:border-gray-700 pt-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Average migration time: 4-6 minutes
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Server className="h-4 w-4" />
                Zero downtime migration
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WordPressMigrationDemo;