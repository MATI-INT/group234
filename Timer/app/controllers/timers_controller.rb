class TimersController < ApplicationController
def index
time = Time.now
 render json: {hours: time.hour, minutes: time.min, seconds: time.sec}
end
end