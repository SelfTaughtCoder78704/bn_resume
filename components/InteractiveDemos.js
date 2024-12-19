import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  LucideCode, Terminal, Database, Layout, 
  Cpu, Cloud, Lock, LineChart, Settings,
  ChevronRight, ChevronDown, Play, Pause
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import the date adapter

Chart.register(...registerables); // Register Chart.js components

const TerminalDemo = () => {
  const [output, setOutput] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const commands = {
    help: 'Available commands: help, clear, echo, status, deploy',
    clear: 'CLEAR',
    echo: (args) => args.join(' '),
    status: 'All systems operational',
    deploy: 'Deploying application...\nBuild successful\nDeployment complete'
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const args = currentCommand.split(' ');
      const cmd = args[0].toLowerCase();
      const result = commands[cmd];
      
      if (result === 'CLEAR') {
        setOutput([]);
      } else {
        setOutput(prev => [...prev, 
          `> ${currentCommand}`,
          typeof result === 'function' ? result(args.slice(1)) : (result || 'Command not found')
        ]);
      }
      setCurrentCommand('');
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="h-48 overflow-auto text-green-400">
        {output.map((line, i) => (
          <div key={i} className="mb-1">{line}</div>
        ))}
        <div className="flex items-center">
          <span className="text-green-500 mr-2">$</span>
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none text-green-400 flex-1"
            placeholder="Type 'help' for commands..."
          />
        </div>
      </div>
    </div>
  );
};

const APITester = () => {
  const [endpoint, setEndpoint] = useState('/api/users');
  const [method, setMethod] = useState('GET');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const mockResponses = {
    '/api/users': {
      GET: { users: [
        { id: 1, name: 'Alice Johnson', role: 'Admin' },
        { id: 2, name: 'Bob Smith', role: 'User' }
      ]},
      POST: { message: 'User created successfully', id: 3 },
      PUT: { message: 'User updated successfully' },
      DELETE: { message: 'User deleted successfully' }
    }
  };

  const handleRequest = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse({
        status: 200,
        data: mockResponses[endpoint][method],
        timestamp: new Date().toISOString()
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        >
          {['GET', 'POST', 'PUT', 'DELETE'].map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <input
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={handleRequest}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          Send Request
        </button>
      </div>
      {response && (
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-auto">
          <code className="text-sm dark:text-gray-300">
            {JSON.stringify(response, null, 2)}
          </code>
        </pre>
      )}
    </div>
  );
};

const PerformanceMetrics = () => {
  const [data, setData] = useState([
    { time: '12:00:00', cpu: 75, memory: 80, requests: 50 },
    { time: '12:00:02', cpu: 78, memory: 82, requests: 55 },
    { time: '12:00:04', cpu: 80, memory: 85, requests: 60 },
    { time: '12:00:06', cpu: 77, memory: 79, requests: 52 },
    { time: '12:00:08', cpu: 82, memory: 83, requests: 58 },
  ]);
  const [isRunning, setIsRunning] = useState(true);
  const chartRef = useRef(null); // Reference for the chart
  const chartInstance = useRef(null); // Reference to store the chart instance

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev, {
          time: new Date().toLocaleTimeString(),
          cpu: Math.random() * 30 + 70,
          memory: Math.random() * 20 + 60,
          requests: Math.floor(Math.random() * 100)
        }];
        return newData.slice(-10); // Keep only the last 10 data points
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy the previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(d => d.time), // Ensure labels are based on the time
          datasets: [
            {
              label: 'CPU %',
              data: data.map(d => d.cpu), // Ensure data is based on CPU values
              borderColor: '#3b82f6',
              fill: false,
            },
            {
              label: 'Memory %',
              data: data.map(d => d.memory), // Ensure data is based on Memory values
              borderColor: '#10b981',
              fill: false,
            },
            {
              label: 'Requests/s',
              data: data.map(d => d.requests), // Ensure data is based on Requests values
              borderColor: '#8b5cf6',
              fill: false,
            }
          ]
        },
        options: {
          scales: {
            x: {
              type: 'category', // Change to 'category' for string labels
              title: {
                display: true,
                text: 'Time'
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Percentage / Requests'
              }
            }
          }
        }
      });
    }
  }, [data]); // Ensure the chart updates when data changes

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold dark:text-white">Live Performance Metrics</h4>
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>
      <canvas ref={chartRef} className="h-64" /> {/* Canvas for Chart.js */}
    </div>
  );
};

const SecurityDemo = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState([]);

  const checkStrength = useCallback((pass) => {
    let score = 0;
    const checks = [
      { regex: /.{8,}/, message: 'At least 8 characters' },
      { regex: /[A-Z]/, message: 'Uppercase letter' },
      { regex: /[a-z]/, message: 'Lowercase letter' },
      { regex: /[0-9]/, message: 'Number' },
      { regex: /[^A-Za-z0-9]/, message: 'Special character' }
    ];

    const newFeedback = checks.map(check => ({
      passed: check.regex.test(pass),
      message: check.message
    }));

    score = newFeedback.filter(f => f.passed).length * 20;
    setStrength(score);
    setFeedback(newFeedback);
  }, []);

  useEffect(() => {
    checkStrength(password);
  }, [password, checkStrength]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          placeholder="Enter password to test strength..."
        />
        <div 
          className="absolute bottom-0 left-0 h-1 transition-all duration-300"
          style={{
            width: `${strength}%`,
            backgroundColor: `hsl(${strength * 1.2}, 100%, 50%)`
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {feedback.map((item, index) => (
          <div 
            key={index}
            className={`flex items-center gap-2 text-sm ${
              item.passed ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            {item.passed ? '✓' : '○'} {item.message}
          </div>
        ))}
      </div>
    </div>
  );
};

const InteractiveDemos = () => {
  const sections = [
    {
      icon: Terminal,
      title: 'CLI Simulation',
      description: 'Interactive command-line interface demo',
      component: <TerminalDemo />
    },
    {
      icon: Cloud,
      title: 'API Testing',
      description: 'Mock REST API interaction demo',
      component: <APITester />
    },
    {
      icon: LineChart,
      title: 'Performance Monitoring',
      description: 'Real-time metrics visualization',
      component: <PerformanceMetrics />
    },
    {
      icon: Lock,
      title: 'Security Analysis',
      description: 'Password strength validator',
      component: <SecurityDemo />
    }
  ];

  return (
    <section>
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 dark:text-white">
            <Cpu className="h-6 w-6" />
            Interactive Technical Demos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg dark:text-white">
                    <section.icon className="h-5 w-5" />
                    {section.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {section.description}
                  </p>
                </CardHeader>
                <CardContent>
                  {section.component}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default InteractiveDemos;
