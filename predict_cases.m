## Copyright (C) 2020 Pathik
## 
## This program is free software: you can redistribute it and/or modify it
## under the terms of the GNU General Public License as published by
## the Free Software Foundation, either version 3 of the License, or
## (at your option) any later version.
## 
## This program is distributed in the hope that it will be useful, but
## WITHOUT ANY WARRANTY; without even the implied warranty of
## MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
## GNU General Public License for more details.
## 
## You should have received a copy of the GNU General Public License
## along with this program.  If not, see
## <https://www.gnu.org/licenses/>.

## -*- texinfo -*- 
## @deftypefn {} {@var{retval} =} predict_cases (@var{input1}, @var{input2})
##
## @seealso{}
## @end deftypefn

## Author: Pathik <pathik@pathik-VirtualBox>
## Created: 2020-05-15

function predict_cases ()
 
  n = input('Enter Day after 1st March at which you want to find cumulative cases : ');
  data = load('training.txt');
  x = data(:,1);
  y = data(:,2);
  
  X = [ones(size(x),1) x];
  sqr = x.^2 ;
  cube = x.^3 ;
  fourth = x.^4 ;
  fifth = x.^5 ;
  sixth = x.^6 ;
  X = [X sqr];
  X = [X cube];
  X = [X fourth];
  
  l = X' * X ;
  
  theta = pinv(l + 100*eye(size(l))) * X' * y ;
  
  retval = theta(1) + theta(2)*n + theta(3)*n.^2 + theta(4)*n.^3 + theta(5)*n.^4 ; 
  display(theta)
  fprintf('Approx cases at %dth day after 1st March are: ',n);
  fprintf(' %f \n', round(retval));
  
  
  %real = load('COVID_cases.txt');
  %xr = real(:,1);
  %hr = theta(1) + theta(2)*xr + theta(3)*xr.^2 + theta(4)*xr.^3 + theta(5)*xr.^4  ;
  %plot(real)
  %hold on 
  %plot(xr,hr)
  
  error = load('for_error.txt');
  err_x = error(:,1);
  err_y = error(:,2);
  len = length(err_y);
  err = ones(19,1);
  for i = 1:len
    err(i) = abs(100 * (err_y(i) - (theta(1) + theta(2)*err_x(i) + theta(3)*err_x(i).^2 + theta(4)*err_x(i).^3 + theta(5)*err_x(i).^4) )./err_y(i));
  endfor
  output_precision(1);
  fprintf('With an error percentage = %d \n',sum(err) / len);
  %fprintf('so cases will lie in range = %f to %f \n',retval - retval*sum(err)/1000,retval + retval*sum(err)/1000);
    
endfunction
