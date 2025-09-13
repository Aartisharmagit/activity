
        // गेम कॉन्फ़िगरेशन
        const gridSize = 8; // ग्रिड 8x8 का होगा
        const candyTypes = [
            { id: 'red-circle', class: 'candy-red-circle' },
            { id: 'blue-square', class: 'candy-blue-square' },
            { id: 'green-diamond', class: 'candy-green-diamond' },
            { id: 'yellow-striped', class: 'candy-yellow-striped' },
            { id: 'purple-jelly', class: 'candy-purple-jelly' }
        ];

        // लेवल लक्ष्य और चाल सीमाएँ
        const levelGoals = [
            { targetScore: 100, moveLimit: 20 },
            { targetScore: 250, moveLimit: 25 },
            { targetScore: 500, moveLimit: 30 }, // Fixed: Changed 'target' to 'targetScore'
            { targetScore: 800, moveLimit: 35 },
            { targetScore: 1200, moveLimit: 40 }
            // अधिक लेवल यहां जोड़ें
        ];

        // गेम स्टेट वैरिएबल्स
        let grid = []; // गेम बोर्ड का प्रतिनिधित्व करने वाला 2D एरे
        let score = 0; // वर्तमान गेम स्कोर
        let selectedCandy = null; // स्वैपिंग के लिए पहली क्लिक की गई कैंडी को स्टोर करता है
        let isSwapping = false; // एनीमेशन के दौरान तेज़ क्लिक/स्वैप को रोकने के लिए फ्लैग
        let cellSize; // एक ग्रिड सेल का आकार (पिक्सेल में)
        let currentLevel = 1;
        let movesLeft = 0;
        let targetScore = 0;
        let levelAttempts = 0; // ट्रैक करता है कि वर्तमान लेवल को कितनी बार प्रयास किया गया है
        let currentLanguage = 'hi'; // डिफ़ॉल्ट भाषा हिंदी ('hi')

        // भाषा अनुवाद डेटा
        const translations = {
            en: {
                gameTitle: 'Candy Crush',
                level: 'Level',
                score: 'Score',
                moves: 'Moves',
                resetGame: 'Reset Game',
                darkMode: 'Dark Mode',
                lightMode: 'Light Mode',
                language: 'हिंदी', // बटन पर दिखाने के लिए अगली भाषा
                superExcited: 'Fantastic! Level Cleared in One Go!',
                levelCleared: 'Level Cleared!',
                movesEnded: 'Moves Ended! Level Failed.',
                retry: 'Retry',
                nextLevel: 'Next Level',
                congratulations: 'Congratulations! You completed all levels!',
                playAgain: 'Play From Start'
            },
            hi: {
                gameTitle: 'कैंडी क्रश',
                level: 'लेवल',
                score: 'स्कोर',
                moves: 'चालें',
                resetGame: 'गेम रीसेट करें',
                darkMode: 'डार्क मोड',
                lightMode: 'लाइट मोड',
                language: 'English', // बटन पर दिखाने के लिए अगली भाषा
                superExcited: 'शानदार! लेवल पूरा हुआ एक ही बार में!',
                levelCleared: 'लेवल पूरा हुआ!',
                movesEnded: 'चालें समाप्त! लेवल विफल।',
                retry: 'पुनः प्रयास करें',
                nextLevel: 'अगला लेवल',
                congratulations: 'बधाई! आपने सभी लेवल पूरे कर लिए!',
                playAgain: 'शुरू से खेलें'
            }
        };

        // DOM एलिमेंट संदर्भ
        const gameContainer = document.getElementById('gameContainer');
        const gameTitleElement = document.getElementById('gameTitle');
        const levelTextElement = document.getElementById('levelText');
        const scoreTextElement = document.getElementById('scoreText');
        const movesTextElement = document.getElementById('movesText');
        const gameGridElement = document.getElementById('game-grid');
        const scoreDisplayElement = document.getElementById('score'); // Changed name to avoid conflict
        const currentLevelDisplay = document.getElementById('currentLevelDisplay');
        const targetScoreDisplay = document.getElementById('targetScoreDisplay');
        const movesLeftDisplay = document.getElementById('movesLeftDisplay');
        const resetButton = document.getElementById('reset-button');
        const darkModeToggleButton = document.getElementById('darkModeToggle');
        const languageToggleButton = document.getElementById('languageToggle');
        const bodyElement = document.body;

        const gameModalOverlay = document.getElementById('gameModalOverlay');
        const modalMessage = document.getElementById('modalMessage');
        const modalActionButton = document.getElementById('modalActionButton');


        /**
         * गेम बोर्ड को इनिशियलाइज़ करता है और नए लेवल के लिए गेम स्टेट सेट करता है।
         * @param {number} levelNum जिस लेवल को इनिशियलाइज़ करना है।
         */
        function initializeLevel(levelNum) {
            currentLevel = levelNum;
            if (currentLevel > levelGoals.length) {
                // सभी लेवल पूरे हो गए
                showGameCompleteModal();
                return;
            }

            targetScore = levelGoals[currentLevel - 1].targetScore;
            movesLeft = levelGoals[currentLevel - 1].moveLimit;
            score = 0; // हर नए लेवल पर स्कोर रीसेट करें
            selectedCandy = null;
            isSwapping = false;

            // ग्रिड को साफ करें
            gameGridElement.innerHTML = '';
            grid = [];

            cellSize = gameGridElement.offsetWidth / gridSize; // सुनिश्चित करें कि cellSize अपडेटेड है

            // रैंडम कैंडीज के साथ ग्रिड भरें
            for (let i = 0; i < gridSize; i++) {
                grid[i] = [];
                for (let j = 0; j < gridSize; j++) {
                    const randomCandyType = candyTypes[Math.floor(Math.random() * candyTypes.length)];
                    const candyElement = document.createElement('div');
                    candyElement.classList.add('candy', randomCandyType.class);
                    candyElement.dataset.row = i;
                    candyElement.dataset.col = j;
                    
                    // कैंडीज को उनकी सही स्थिति पर रखें
                    candyElement.style.left = `${j * cellSize}px`;
                    candyElement.style.top = `${i * cellSize}px`;
                    candyElement.style.width = `${cellSize}px`;
                    candyElement.style.height = `${cellSize}px`;
                    
                    gameGridElement.appendChild(candyElement);

                    grid[i][j] = {
                        typeId: randomCandyType.id,
                        row: i,
                        col: j,
                        element: candyElement
                    };
                }
            }
            updateUI();

            // सुनिश्चित करें कि बोर्ड मौजूदा मैचों के साथ शुरू न हो
            let initialMatches = checkForMatches();
            while (initialMatches.length > 0) {
                initialMatches.forEach(candy => {
                    if (grid[candy.row] && grid[candy.row][candy.col]) {
                        grid[candy.row][candy.col] = null; // हटाने के लिए चिह्नित करें
                    }
                });

                // प्रारंभिक बोर्ड सेटअप के लिए सरलीकृत रीफिल और शिफ्ट (कोई एनीमेशन नहीं)
                for (let c = 0; c < gridSize; c++) {
                    let emptyRow = gridSize - 1;
                    for (let r = gridSize - 1; r >= 0; r--) {
                        if (grid[r][c] !== null) {
                            if (r !== emptyRow) {
                                grid[emptyRow][c] = grid[r][c];
                                grid[emptyRow][c].row = emptyRow;
                                grid[r][c] = null;
                            }
                            emptyRow--;
                        }
                        }
                    for (let r = 0; r <= emptyRow; r++) {
                        const newCandyType = candyTypes[Math.floor(Math.random() * candyTypes.length)];
                        grid[r][c] = {
                            typeId: newCandyType.id,
                            row: r,
                            col: c,
                            element: null // renderGridElements में बनाई जाएगी
                        };
                    }
                }
                // प्रारंभिक बोर्ड के लिए तत्वों को फिर से रेंडर करें
                renderGridElements();
                initialMatches = checkForMatches(); // फिर से जांचें
            }
        }

        /**
         * ग्रिड के DOM एलिमेंट्स को अपडेट करता है और उन्हें उनकी सही स्थिति पर रखता है।
         * यह प्रारंभिक बोर्ड निर्माण या बोर्ड रीसेट के लिए उपयोग किया जाता है।
         */
        function renderGridElements() {
            const currentElements = Array.from(gameGridElement.children);
            const elementsInGrid = new Set();
            grid.forEach(row => row.forEach(candy => {
                if (candy && candy.element) {
                    elementsInGrid.add(candy.element);
                }
            }));

            currentElements.forEach(el => {
                if (!elementsInGrid.has(el)) {
                    el.remove();
                }
            });

            for (let r = 0; r < gridSize; r++) {
                for (let c = 0; c < gridSize; c++) {
                    const candy = grid[r][c];
                    if (candy) {
                        let candyElement = candy.element;
                        if (!candyElement) {
                            candyElement = document.createElement('div');
                            const type = candyTypes.find(t => t.id === candy.typeId);
                            candyElement.classList.add('candy', type.class);
                            gameGridElement.appendChild(candyElement);
                            candy.element = candyElement;
                        }

                        candyElement.dataset.row = r;
                        candyElement.dataset.col = c;
                        candyElement.style.left = `${c * cellSize}px`;
                        candyElement.style.top = `${r * cellSize}px`;
                        candyElement.style.width = `${cellSize}px`;
                        candyElement.style.height = `${cellSize}px`;
                        candyElement.style.transition = 'none';
                        candyElement.style.opacity = '1';
                        candyElement.style.transform = 'none';
                    }
                }
            }
        }

        /**
         * UI डिस्प्ले को अपडेट करता है: स्कोर, लेवल, बची हुई चालें।
         */
        function updateUI() {
            currentLevelDisplay.textContent = currentLevel;
            scoreDisplayElement.textContent = score;
            targetScoreDisplay.textContent = targetScore;
            movesLeftDisplay.textContent = movesLeft;
            setLanguage(currentLanguage); // UI टेक्स्ट को अपडेट करें
        }

        /**
         * गेम एलिमेंट्स में आवश्यक इवेंट लिसनर्स जोड़ता है।
         */
        function addEventListeners() {
            gameGridElement.addEventListener('click', handleCandyClick);
            resetButton.addEventListener('click', resetGame);
            darkModeToggleButton.addEventListener('click', toggleDarkMode);
            languageToggleButton.addEventListener('click', toggleLanguage); // भाषा टॉगल बटन के लिए इवेंट लिसनर
            window.addEventListener('resize', () => {
                cellSize = gameGridElement.offsetWidth / gridSize;
                grid.forEach(row => {
                    row.forEach(candy => {
                        if (candy && candy.element) {
                            candy.element.style.left = `${candy.col * cellSize}px`;
                            candy.element.style.top = `${candy.row * cellSize}px`;
                            candy.element.style.width = `${cellSize}px`;
                            candy.element.style.height = `${cellSize}px`;
                        }
                    });
                });
            });
        }

        /**
         * डार्क मोड को चालू/बंद करता है।
         */
        function toggleDarkMode() {
            bodyElement.classList.toggle('dark-mode-active');
            updateUI(); // UI टेक्स्ट को अपडेट करें क्योंकि डार्क मोड टेक्स्ट बदल सकता है
        }

        /**
         * भाषा को टॉगल करता है और UI टेक्स्ट को अपडेट करता है।
         */
        function toggleLanguage() {
            currentLanguage = (currentLanguage === 'en' ? 'hi' : 'en');
            updateUI(); // सभी UI टेक्स्ट को नई भाषा के अनुसार अपडेट करें
        }

        /**
         * वर्तमान भाषा के आधार पर सभी UI टेक्स्ट को सेट करता है।
         * @param {string} lang 'en' या 'hi'
         */
        function setLanguage(lang) {
            gameTitleElement.textContent = translations[lang].gameTitle;
            levelTextElement.innerHTML = `${translations[lang].level}: <span id="currentLevelDisplay">${currentLevel}</span>`;
            scoreTextElement.innerHTML = `${translations[lang].score}: <span id="score">${score}</span> / <span id="targetScoreDisplay">${targetScore}</span>`;
            movesTextElement.innerHTML = `${translations[lang].moves}: <span id="movesLeftDisplay">${movesLeft}</span>`;
            resetButton.textContent = translations[lang].resetGame;
            
            if (bodyElement.classList.contains('dark-mode-active')) {
                darkModeToggleButton.textContent = translations[lang].lightMode;
            } else {
                darkModeToggleButton.textContent = translations[lang].darkMode;
            }
            languageToggleButton.textContent = translations[lang].language; // बटन टेक्स्ट को अगली भाषा में सेट करें
        }


        /**
         * एक कैंडी पर क्लिक इवेंट को हैंडल करता है।
         * चयन को प्रबंधित करता है और स्वैप लॉजिक को ट्रिगर करता है।
         * @param {Event} event क्लिक इवेंट ऑब्जेक्ट।
         */
        function handleCandyClick(event) {
            if (isSwapping) return;

            let clickedCandyElement = event.target.closest('.candy');
            if (!clickedCandyElement) return;

            const row = parseInt(clickedCandyElement.dataset.row);
            const col = parseInt(clickedCandyElement.dataset.col);

            // *** CRITICAL FIX: Ensure clickedCandy exists in the grid before proceeding ***
            const clickedCandy = grid[row]?.[col]; // Use optional chaining for safety
            if (!clickedCandy) { // If clickedCandy is null or undefined, simply return
                console.warn(`Clicked on an invalid or empty grid position: [${row}, ${col}]. Ignoring click.`);
                return;
            }

            if (selectedCandy === null) {
                // No candy is currently selected, so select this one
                selectedCandy = clickedCandy;
                selectedCandy.element.classList.add('selected'); // This line is now safe
            } else {
                // A candy is already selected, now check if this second click is an adjacent candy
                const currentRow = selectedCandy.row;
                const currentCol = selectedCandy.col;

                // Defensive check: Ensure selectedCandy is still valid if it was previously set.
                // This handles potential edge cases where selectedCandy's element might have been removed
                // before the second click.
                if (!selectedCandy || !selectedCandy.element) { // Added check for selectedCandy itself
                    console.error('Selected candy element is missing or selectedCandy is invalid. Resetting selection.');
                    selectedCandy = null; // Clear invalid selection
                    return;
                }

                const isAdjacent = (
                    (Math.abs(row - currentRow) === 1 && col === currentCol) || // Vertical adjacency
                    (Math.abs(col - currentCol) === 1 && row === currentRow)    // Horizontal adjacency
                );

                if (isAdjacent) {
                    // It's an adjacent candy, attempt a swap
                    isSwapping = true; // Set flag to prevent other interactions during swap
                    selectedCandy.element.classList.remove('selected'); // Remove highlight from first candy
                    swapCandies(selectedCandy, clickedCandy); // Perform the swap logic
                    selectedCandy = null; // Reset selected candy after swap attempt
                } else {
                    // Not adjacent, or clicked the same candy again, or clicked another non-adjacent candy
                    // Deselect the previously selected candy and select the new one
                    selectedCandy.element.classList.remove('selected');
                    selectedCandy = clickedCandy;
                    selectedCandy.element.classList.add('selected');
                }
            }
        }

        /**
         * आंतरिक ग्रिड एरे में दो कैंडीज को स्वैप करता है और विज़ुअल स्वैप एनीमेशन को निष्पादित करता है।
         * @param {Object} candy1 स्वैप करने के लिए पहली कैंडी ऑब्जेक्ट।
         * @param {Object} candy2 स्वैप करने के लिए दूसरी कैंडी ऑब्जेक्ट।
         */
        function swapCandies(candy1, candy2) {
            const originalC1Row = candy1.row;
            const originalC1Col = candy1.col;
            const originalC2Row = candy2.row;
            const originalC2Col = candy2.col;

            const element1 = candy1.element;
            const element2 = candy2.element;

            const dx1 = (originalC2Col - originalC1Col) * cellSize;
            const dy1 = (originalC2Row - originalC1Row) * cellSize;
            const dx2 = (originalC1Col - originalC2Col) * cellSize;
            const dy2 = (originalC1Row - originalC2Row) * cellSize;

            element1.style.transition = 'transform 0.2s ease-out';
            element2.style.transition = 'transform 0.2s ease-out';
            element1.style.transform = `translate(${dx1}px, ${dy1}px)`;
            element2.style.transform = `translate(${dx2}px, ${dy2}px)`;

            grid[originalC1Row][originalC1Col] = candy2;
            grid[originalC2Row][originalC2Col] = candy1;

            candy1.row = originalC2Row;
            candy1.col = originalC2Col;
            candy2.row = originalC1Row;
            candy2.col = originalC1Col;

            element1.dataset.row = candy1.row;
            element1.dataset.col = candy1.col;
            element2.dataset.row = candy2.row;
            element2.dataset.col = candy2.col;

            setTimeout(() => {
                element1.style.transition = 'none';
                element2.style.transition = 'none';
                element1.style.transform = '';
                element2.style.transform = '';

                element1.style.left = `${candy1.col * cellSize}px`;
                element1.style.top = `${candy1.row * cellSize}px`;
                element2.style.left = `${candy2.col * cellSize}px`;
                element2.style.top = `${candy2.row * cellSize}px`;

                setTimeout(() => {
                    element1.style.transition = 'transform 0.2s ease-out, opacity 0.3s ease-out';
                    element2.style.transition = 'transform 0.2s ease-out, opacity 0.3s ease-out';
                }, 50);

                const matchedCandies = checkForMatches();
                if (matchedCandies.length === 0) {
                    isSwapping = true;

                    element1.style.transition = 'transform 0.2s ease-out';
                    element2.style.transition = 'transform 0.2s ease-out';
                    element1.style.transform = `translate(${dx2}px, ${dy2}px)`;
                    element2.style.transform = `translate(${dx1}px, ${dy1}px)`;

                    grid[originalC1Row][originalC1Col] = candy1;
                    grid[originalC2Row][originalC2Col] = candy2;

                    candy1.row = originalC1Row;
                    candy1.col = originalC1Col;
                    candy2.row = originalC2Row;
                    candy2.col = originalC2Col;

                    element1.dataset.row = candy1.row;
                    element1.dataset.col = candy1.col;
                    element2.dataset.row = candy2.row;
                    element2.dataset.col = candy2.col;

                    setTimeout(() => {
                        element1.style.transition = 'none';
                        element2.style.transition = 'none';
                        element1.style.transform = '';
                        element2.style.transform = '';
                        element1.style.left = `${candy1.col * cellSize}px`;
                        element1.style.top = `${candy1.row * cellSize}px`;
                        element2.style.left = `${candy2.col * cellSize}px`;
                        element2.style.top = `${candy2.row * cellSize}px`;
                        isSwapping = false;

                        setTimeout(() => {
                            element1.style.transition = 'transform 0.2s ease-out, opacity 0.3s ease-out';
                            element2.style.transition = 'transform 0.2s ease-out, opacity 0.3s ease-out';
                        }, 50);
                    }, 200);
                } else {
                    // यदि मैच मिला, तो चालें कम करें
                    movesLeft--;
                    updateUI();
                    handleMatches(matchedCandies);
                }
            }, 200);
        }

        /**
         * पूरे ग्रिड में 3 या अधिक समान-रंग/समान-आकार की कैंडीज के क्षैतिज और ऊर्ध्वाधर मैचों की जांच करता है।
         * @returns {Array<Object>} एक एरे अद्वितीय कैंडी ऑब्जेक्ट्स का जो एक मैच का हिस्सा हैं।
         */
        function checkForMatches() {
            const uniqueMatches = new Set();

            // क्षैतिज मैचों की जांच करें
            for (let r = 0; r < gridSize; r++) {
                for (let c = 0; c <= gridSize - 3; c++) {
                    const candy1 = grid[r][c];
                    const candy2 = grid[r][c + 1];
                    const candy3 = grid[r][c + 2];

                    if (candy1 && candy2 && candy3 &&
                        candy1.typeId === candy2.typeId && candy1.typeId === candy3.typeId) {

                        let currentMatch = [candy1, candy2, candy3];
                        let k = c + 3;
                        while (k < gridSize && grid[r][k] && grid[r][k].typeId === candy1.typeId) {
                            currentMatch.push(grid[r][k]);
                            k++;
                        }
                        currentMatch.forEach(candy => uniqueMatches.add(candy));
                        c = k - 1;
                    }
                }
            }

            // ऊर्ध्वाधर मैचों की जांच करें
            for (let c = 0; c < gridSize; c++) {
                for (let r = 0; r <= gridSize - 3; r++) {
                    const candy1 = grid[r][c];
                    const candy2 = grid[r + 1][c];
                    const candy3 = grid[r + 2][c];

                    if (candy1 && candy2 && candy3 &&
                        candy1.typeId === candy2.typeId && candy1.typeId === candy3.typeId) {

                        let currentMatch = [candy1, candy2, candy3];
                        let k = r + 3;
                        while (k < gridSize && grid[k][c] && grid[k][c].typeId === candy1.typeId) {
                            currentMatch.push(grid[k][c]);
                            k++;
                        }
                        currentMatch.forEach(candy => uniqueMatches.add(candy));
                        r = k - 1;
                    }
                }
            }

            return Array.from(uniqueMatches);
        }

        /**
         * मैच की गई कैंडीज को हैंडल करता है: स्कोर अपडेट करता है, उन्हें विज़ुअल रूप से हटाता है, और गिराने की प्रक्रिया को ट्रिगर करता है।
         * @param {Array<Object>} matchedCandies वे कैंडी ऑब्जेक्ट्स जो अभी-अभी मैच किए गए थे।
         */
        function handleMatches(matchedCandies) {
            if (matchedCandies.length === 0) {
                isSwapping = false;
                checkGameStatus(); // महत्वपूर्ण: कैस्केडिंग मैचों के बाद गेम की स्थिति की जांच करें
                return;
            }

            score += matchedCandies.length * 10;
            updateUI();

            matchedCandies.forEach(candy => {
                if (candy.element) {
                    candy.element.classList.add('matched');
                }
            });

            setTimeout(() => {
                dropCandies(matchedCandies);
            }, 300);
        }

        /**
         * मैच की गई कैंडीज को हटाता है, मौजूदा कैंडीज को अंतराल भरने के लिए नीचे ले जाता है,
         * और शीर्ष पंक्ति को नई रैंडम रंगीन/आकार की कैंडीज से भरता है।
         * अंत में, रेंडरिंग और गिरने एनीमेशन को ट्रिगर करता है।
         * @param {Array<Object>} matchedCandies वे कैंडीज जो अभी-अभी मैच की गई और हटा दी गई हैं।
         */
        function dropCandies(matchedCandies) {
            const elementsToRemove = matchedCandies.map(candy => candy.element);
            elementsToRemove.forEach(el => el.remove());

            matchedCandies.forEach(candy => {
                if (grid[candy.row] && grid[candy.row][candy.col]) {
                    grid[candy.row][candy.col] = null;
                }
            });

            const candiesToAnimate = [];

            for (let c = 0; c < gridSize; c++) {
                let emptyRow = gridSize - 1;

                for (let r = gridSize - 1; r >= 0; r--) {
                    if (grid[r][c] !== null) {
                        if (r !== emptyRow) {
                            const candyToMove = grid[r][c];
                            const oldRow = candyToMove.row;

                            grid[emptyRow][c] = candyToMove;
                            grid[r][c] = null;
                            candyToMove.row = emptyRow;

                            candiesToAnimate.push({
                                element: candyToMove.element,
                                newRow: emptyRow,
                                newCol: c,
                                oldRow: oldRow,
                                isNew: false
                            });
                        }
                        emptyRow--;
                    }
                }

                for (let r = 0; r <= emptyRow; r++) {
                    const newCandyType = candyTypes[Math.floor(Math.random() * candyTypes.length)];
                    const newCandyElement = document.createElement('div');
                    newCandyElement.classList.add('candy', newCandyType.class);
                    newCandyElement.dataset.row = r;
                    newCandyElement.dataset.col = c;
                    
                    newCandyElement.style.transition = 'none';
                    newCandyElement.style.left = `${c * cellSize}px`;
                    newCandyElement.style.top = `${-cellSize}px`;
                    newCandyElement.style.width = `${cellSize}px`;
                    newCandyElement.style.height = `${cellSize}px`;
                    
                    gameGridElement.appendChild(newCandyElement);

                    const newCandy = {
                        typeId: newCandyType.id,
                        row: r,
                        col: c,
                        element: newCandyElement
                    };
                    grid[r][c] = newCandy;

                    candiesToAnimate.push({
                        element: newCandyElement,
                        newRow: r,
                        newCol: c,
                        oldRow: -1,
                        isNew: true
                    });
                }
            }

            requestAnimationFrame(() => {
                candiesToAnimate.forEach(candyAnim => {
                    const el = candyAnim.element;
                    el.style.transition = 'top 0.4s ease-out';

                    if (candyAnim.isNew) {
                        el.style.top = `${candyAnim.newRow * cellSize}px`;
                    } else {
                        el.style.top = `${candyAnim.newRow * cellSize}px`;
                    }
                    el.style.left = `${candyAnim.newCol * cellSize}px`;

                    el.dataset.row = candyAnim.newRow;
                    el.dataset.col = candyAnim.newCol; // Updated to newCol for safety, though it typically remains the same
                });

                setTimeout(() => {
                    grid.forEach(row => {
                        row.forEach(candy => {
                            if (candy && candy.element) {
                                candy.element.style.transition = 'transform 0.2s ease-out, opacity 0.3s ease-out';
                            }
                        });
                    });

                    const newMatches = checkForMatches();
                    if (newMatches.length > 0) {
                        handleMatches(newMatches);
                    } else {
                        isSwapping = false;
                        checkGameStatus();
                    }
                }, 400);
            });
        }

        /**
         * गेम की वर्तमान स्थिति की जांच करता है (लेवल पूरा हुआ या चालें समाप्त हुईं)।
         */
        function checkGameStatus() {
            if (score >= targetScore) {
                showLevelCompleteModal(true); // लेवल पूरा हुआ
            } else if (movesLeft <= 0) {
                showLevelCompleteModal(false); // चालें समाप्त, लेवल विफल
            }
        }

        /**
         * लेवल पूरा होने या गेम ओवर के लिए मोडल दिखाता है।
         * @param {boolean} isSuccess यदि लेवल सफलतापूर्वक पूरा हो गया है।
         */
        function showLevelCompleteModal(isSuccess) {
            gameModalOverlay.classList.add('active');
            gameGridElement.style.pointerEvents = 'none'; // गेम बोर्ड इंटरैक्शन को अक्षम करें

            const lang = currentLanguage;

            if (isSuccess) {
                if (levelAttempts === 0) { // Assuming 0 attempts means first try for that level
                    modalMessage.textContent = translations[lang].superExcited;
                    gameContainer.classList.add('super-excited-animation');
                } else {
                    modalMessage.textContent = translations[lang].levelCleared;
                    gameContainer.classList.add('small-animation');
                }
                modalActionButton.textContent = translations[lang].nextLevel;
                modalActionButton.classList.remove('restart');
                modalActionButton.classList.add('next-level');
                modalActionButton.onclick = () => {
                    gameContainer.classList.remove('super-excited-animation', 'small-animation'); // एनीमेशन कक्षाएँ हटाएँ
                    gameModalOverlay.classList.remove('active');
                    gameGridElement.style.pointerEvents = 'auto'; // गेम बोर्ड इंटरैक्शन को सक्षम करें
                    levelAttempts = 0; // अगले लेवल के लिए प्रयास रीसेट करें
                    initializeLevel(currentLevel + 1);
                };
            } else {
                modalMessage.textContent = translations[lang].movesEnded;
                gameContainer.classList.add('small-animation'); // विफल होने पर भी एक छोटी एनीमेशन
                modalActionButton.textContent = translations[lang].retry;
                modalActionButton.classList.remove('next-level');
                modalActionButton.classList.add('restart');
                modalActionButton.onclick = () => {
                    gameContainer.classList.remove('super-excited-animation', 'small-animation'); // एनीमेशन कक्षाएँ हटाएँ
                    gameModalOverlay.classList.remove('active');
                    gameGridElement.style.pointerEvents = 'auto'; // गेम बोर्ड इंटरैक्शन को सक्षम करें
                    levelAttempts++; // प्रयास बढ़ाएँ
                    initializeLevel(currentLevel); // वर्तमान लेवल को फिर से शुरू करें
                };
            }
        }

        /**
         * सभी लेवल पूरे होने पर मोडल दिखाता है।
         */
        function showGameCompleteModal() {
            gameModalOverlay.classList.add('active');
            gameGridElement.style.pointerEvents = 'none';
            const lang = currentLanguage;
            modalMessage.textContent = translations[lang].congratulations;
            gameContainer.classList.add('super-excited-animation'); // पूरे गेम के लिए उत्साहित एनीमेशन
            modalActionButton.textContent = translations[lang].playAgain;
            modalActionButton.classList.remove('restart', 'next-level');
            modalActionButton.onclick = () => {
                gameContainer.classList.remove('super-excited-animation', 'small-animation');
                gameModalOverlay.classList.remove('active');
                gameGridElement.style.pointerEvents = 'auto';
                currentLevel = 1;
                levelAttempts = 0;
                initializeLevel(currentLevel);
            };
        }

        /**
         * पूरे गेम को उसकी प्रारंभिक स्थिति में रीसेट करता है (लेवल 1 से शुरू होता है)।
         */
        function resetGame() {
            if (isSwapping) return;
            selectedCandy = null;
            isSwapping = false;
            gameModalOverlay.classList.remove('active');
            gameGridElement.style.pointerEvents = 'auto';
            currentLevel = 1;
            levelAttempts = 0;
            initializeLevel(currentLevel);
        }

        // जब विंडो पूरी तरह से लोड हो जाए तो गेम को इनिशियलाइज़ करें
        window.onload = function() {
            // levelAttempts को initializeLevel() द्वारा सेट किया जाएगा, इसलिए इसे यहां 0 पर सेट करें
            // ताकि पहला प्रयास 0 से शुरू हो
            levelAttempts = 0;
            initializeLevel(currentLevel);
            addEventListeners();
            setLanguage(currentLanguage); // प्रारंभिक भाषा सेट करें
        };

