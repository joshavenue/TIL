numOne = int(input('Key in something : '))
numTwo = int(input('Key in something too : '))

boundaryLimit = 10000
boundaryLimitLow = 2000
numThree = numOne * numTwo

if numThree > boundaryLimitLow and numThree > boundaryLimit:
    print 'Your number is now higher than usual, which is now ', numThree
elif numThree > boundaryLimitLow:
    print 'Your number is now higher than the first limit, which is now ', numThree
else:
    pass
