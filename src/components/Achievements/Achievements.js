import React from 'react';

const Achievements = () => {
    return (
        <div className='container py-5'>
            <h1>See What others are Achieving by Learning</h1>
            <div className='row'>
                <div className="col-md-4 border p-4">
                    <h4>John Smith</h4>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis iste distinctio unde in molestias error, debitis excepturi sunt sit.</small></p>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <p>name</p>
                            <p><small>profession</small></p>
                        </div>
                    </div>

                    <a href="/history">View full story</a>

                </div>
            </div>
        </div>
    );
};

export default Achievements;